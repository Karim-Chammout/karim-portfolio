/* eslint-disable no-useless-escape */

/* eslint-disable no-underscore-dangle */
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import sanityClient, { imgUrlFor } from '../../../client';
import { Button, ScrollToTop } from '../../../components';
import { Spinner } from '../../../components/Spinner';
import NotFound from '../../notFound';
import { PostType } from '../types';
import {
  AuthorImg,
  AuthorName,
  AuthorSection,
  BlogDesc,
  BlogTitle,
  ButtonWrapper,
  Img,
  Input,
  Label,
  Line,
  PortableStyles,
  SectionWrapper,
  Span,
  StyledForm,
  Text,
  TextArea,
} from './BlogDetails.style';
import { CustomComponents } from './compositions';

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const fetchPost = async (slug?: string) => {
  const singlePostQuery = `
    *[_type == 'post' && slug.current == '${slug}'][0]{
      _id,
      title,
      author-> {
        name,
        image
      },
      slug,
      description,
      mainImage,
      publishedAt,
      _updatedAt,
      categories[]-> {
        title,
        description
      },
      body,
      'comments': *[
        _type == 'comment' &&
        post._ref == ^._id &&
        approved == true
      ]| order(_createdAt desc)
    }
    `;

  return sanityClient.fetch(singlePostQuery);
};

const imgLink = (asset: PostType['mainImage']) => imgUrlFor(asset).url();

const isValidEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const publishedAtDate = (date: string) =>
  new Date(date).toDateString().split(' ').slice(1).join(' ');

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { name, email, comment, _id } = data;
    const trimedEmail = email.trimStart();

    try {
      const notValidData = !name || name.trim() === '' || !comment || comment.trim() === '';

      if (notValidData || !isValidEmail(trimedEmail)) {
        if (!isValidEmail(trimedEmail) && notValidData) {
          toast.error("Oops! looks like you're trying to submit an empty comment!");
          setSubmitted(false);

          return;
        }
        if (!isValidEmail(trimedEmail)) {
          toast.error('Oops! Please make sure to add a valid email!');
          setSubmitted(false);

          return;
        }

        return;
      }

      setIsSubmitting(true);
      await sanityClient.create({
        _type: 'comment',
        post: {
          _type: 'reference',
          _ref: _id,
        },
        name: name.trimStart(),
        email: trimedEmail,
        comment: comment.trimStart(),
      });
      toast.success("Thank you! Your comment will be displayed once it's approved");
      setSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      setSubmitted(false);
      setIsSubmitting(false);
      toast.error('Oops! Something went wrong. Try again later');
    }
  };

  const {
    data: postData,
    isLoading,
    isFetched,
    isFetching,
    error,
  } = useQuery<PostType>('post', () => fetchPost(slug));

  if (isLoading || (isFetching && !isFetched)) {
    return <Spinner />;
  }

  if (error || !postData) {
    return <NotFound />;
  }

  return (
    <>
      <SectionWrapper>
        <BlogTitle>{postData.title}</BlogTitle>
        <BlogDesc>{postData.description}</BlogDesc>
        <AuthorSection>
          <div>
            {postData.author && (
              <AuthorImg
                src={imgLink(postData.author.image)}
                alt={postData.title}
                loading="lazy"
                onClick={() => window.open('https://github.com/Karim-Chammout', '_blank')}
              />
            )}
          </div>
          <div style={{ marginLeft: '10px' }}>
            <AuthorName>
              <em>{postData.author.name}</em>
            </AuthorName>
            <p style={{ margin: '0 0 5px 0', fontStyle: 'italic' }}>
              Published on: <b>{publishedAtDate(postData.publishedAt)}</b>
            </p>
            <p style={{ margin: '5px 0', fontStyle: 'italic' }}>
              Last updated on: <b>{publishedAtDate(postData._updatedAt)}</b>
            </p>
          </div>
        </AuthorSection>
        {postData.mainImage && (
          <Img
            src={imgLink(postData.mainImage)}
            alt={postData.title}
            onClick={() => window.open(imgLink(postData.mainImage), '_blank')}
            loading="lazy"
          />
        )}
        <PortableStyles>
          <PortableText value={postData.body} components={CustomComponents} />
        </PortableStyles>
        <Line />
        {!submitted && (
          <StyledForm>
            <div style={{ width: '100%', textAlign: 'left', marginBottom: '10px' }}>
              <Text style={{ fontWeight: 'bold' }}>Liked this article?</Text>
              <Text>Leave a comment bellow!</Text>
            </div>
            <input {...register('_id')} type="hidden" name="_id" value={postData._id} />

            <Label>
              <Span>Name</Span>
              <Input
                {...register('name', { required: true })}
                placeholder="Your name"
                type="text"
                hasError={!!errors.name}
              />
            </Label>
            <Label>
              <Span>Email</Span>
              <Input
                {...register('email', { required: true })}
                placeholder="Your email"
                type="email"
                hasError={!!errors.email}
              />
            </Label>
            <Label>
              <Span>Comment</Span>
              <TextArea
                {...register('comment', { required: true })}
                placeholder="Your comment"
                rows={6}
                hasError={!!errors.comment}
              />
            </Label>
            <ButtonWrapper>
              <Button
                disabled={isSubmitting}
                text={isSubmitting ? 'Submitting...' : 'Submit'}
                onClick={handleSubmit(onSubmit)}
              />
            </ButtonWrapper>
          </StyledForm>
        )}
        {submitted && (
          <div
            style={{
              maxWidth: '700px', // DON'T FORGET media query width, currently it's broken
              background: '#a6e1f1', // Card color (just like the blog card's background)
              padding: '20px',
              border: '1px solid #7f8daa',
              borderRadius: '4px',
              margin: 'auto',
            }}
          >
            <h5 style={{ margin: 0, fontSize: '1.5em' }}>Thanks for submitting your comment</h5>
            <p style={{ marginBottom: 0 }}>Your comment will be displayed once it's approved</p>
          </div>
        )}

        {/* Comment section */}
        {postData.comments &&
          postData.comments?.map((c) => (
            /* Add avatar icon (something related to devs maybe) and render it just like the author section */
            <section
              key={c._id}
              style={{
                /* WIP */
                maxWidth: '700px', // DON'T FORGET media query width, currently it's broken
                // border: '1px solid grey',
                borderRadius: '4px',
                background: 'hsl(198, 100%, 92%)',
                // background: 'red',
                padding: '15px',
                margin: '15px auto',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'flex-start',
                boxShadow: '0 1px 3px 0 lightGrey, 0 0 0 1px lightGrey',
              }}
            >
              <p style={{ margin: '0 0 5px 70px', fontStyle: 'italic' }}>
                Published on:<b>{publishedAtDate(c._createdAt)}</b>
              </p>
              <div
                style={{
                  /* WIP */
                  // maxWidth: '700px',
                  // border: '1px solid grey',
                  // borderRadius: '4px',
                  // background: 'hsl(198, 100%, 92%)',
                  // padding: '15px',
                  // margin: '5px auto',
                  display: 'flex',
                  alignItems: 'center',
                  // boxShadow: '0 1px 3px 0 lightGrey, 0 0 0 1px lightGrey',
                }}
              >
                <div
                  style={{
                    background: '#a6e1f1',
                    minHeight: '50px',
                    minWidth: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'start',
                    border: '1px solid #7f8daa',
                    borderRadius: '50%',
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                  }}
                >
                  {c.name.substring(0, 1).toUpperCase()}
                </div>
                <div style={{ marginLeft: '20px' }}>
                  {/* <p style={{ margin: 0, fontWeight: 'bold' }}>Published on: {publishedAtDate(c._createdAt)}</p> */}
                  <p style={{ margin: '0px', textTransform: 'capitalize', fontWeight: 'bold' }}>
                    {c.name}
                  </p>
                  <p style={{ margin: '0', lineHeight: 1.4 }}>{c.comment}</p>
                </div>
              </div>
            </section>
          ))}
      </SectionWrapper>
      <ScrollToTop />
    </>
  );
};

export default BlogDetails;
