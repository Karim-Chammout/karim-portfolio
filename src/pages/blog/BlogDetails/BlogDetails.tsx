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
  H5,
  Hr,
  Img,
  Input,
  Label,
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
      ]
    }
    `;

  return sanityClient.fetch(singlePostQuery);
};

const imgLink = (asset: PostType['mainImage']) => imgUrlFor(asset).url();

const publishedAtDate = (date: string) =>
  new Date(date).toDateString().split(' ').slice(1).join(' ');

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [submitted, setSubmitted] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { name, email, comment, _id } = data;
    try {
      if (!name || name.trim() === '' || !email || !comment || comment.trim() === '') {
        toast.error("Oops! looks like you're trying to submit and empty comment!");
        setSubmitted(false);

        return;
      }

      sanityClient.create({
        _type: 'comment',
        post: {
          _type: 'reference',
          _ref: _id,
        },
        name: name.trimStart(),
        email: email.trimStart(),
        comment: comment.trimStart(),
      });
      toast.success("Thank you! Your comment will be displayed once it's approved");
      setSubmitted(true);
    } catch (err) {
      toast.error('Oops! Something went wrong');
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

  // console.log(postData);

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
            <p style={{ margin: '0 0 5px 0' }}>
              Published on:{' '}
              <b>
                <em>{publishedAtDate(postData.publishedAt)}</em>
              </b>
            </p>
            <p style={{ margin: '5px 0' }}>
              Last updated on:{' '}
              <b>
                <em>{publishedAtDate(postData._updatedAt)}</em>
              </b>
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
        {!submitted && (
          <StyledForm>
            <div style={{ width: '100%', textAlign: 'left' }}>
              <H5>Liked this article?</H5>
              <Text>Leave a comment bellow!</Text>
              <Hr />
            </div>
            <input {...register('_id')} type="hidden" name="_id" value={postData._id} />

            <Label>
              <Span>Name</Span>
              <Input
                {...register('name', { required: true })}
                placeholder="Your name"
                type="text"
              />
            </Label>
            <Label>
              <Span>Email</Span>
              <Input
                {...register('email', { required: true })}
                placeholder="Your email"
                type="email"
              />
            </Label>
            <Label>
              <Span>Comment</Span>
              <TextArea
                {...register('comment', { required: true })}
                placeholder="Your comment"
                rows={6}
              />
            </Label>
            <ButtonWrapper>
              <Button text="Submit" onClick={handleSubmit(onSubmit)} />
            </ButtonWrapper>
          </StyledForm>
        )}
        {submitted && (
          <>
            <h1>Thanks for submitting the comment</h1>
            <p>Your comment will be displayed once it's approved</p>
          </>
        )}

        {/* Comment section */}
        {postData.comments &&
          postData.comments?.map((c) => (
            /* Add avatar icon (something related to devs maybe) and render it just like the author section */
            <div
              key={c._id}
              style={{
                /* WIP */
                border: '1px solid red',
                background: 'yellow',
                padding: '20px',
                margin: '5px 0',
              }}
            >
              <p>Published on: {publishedAtDate(c._createdAt)}</p>
              <p>Name: {c.name}</p>
              <p>{c.comment}</p>
            </div>
          ))}
      </SectionWrapper>
      <ScrollToTop />
    </>
  );
};

export default BlogDetails;
