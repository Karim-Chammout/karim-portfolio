import emailjs from '@emailjs/browser';
import { PortableText } from '@portabletext/react';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import sanityClient, { imgUrlFor } from '../../../client';
import { Button, ScrollToTop } from '../../../components';
import { Spinner } from '../../../components/Spinner';
import { ProgressBar } from '../../../globals/global';
import useProgressBar from '../../../hook/useProgressBar';
import { isValidEmail } from '../../../utils/isValidEmail';
import NotFound from '../../notFound';
import { Post } from '../types';
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
  LikedArticle,
  Line,
  PortableStyles,
  SectionWrapper,
  StyledForm,
  SubmittedWrapper,
  Text,
  TextArea,
} from './BlogDetails.style';
import { Comments, CustomComponents, DisplayDate } from './compositions';
import { fetchPost } from './postQuery';

interface FormInputType {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const imgLink = (asset: Post['mainImage']) => imgUrlFor(asset).url();

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>();

  const onSubmit: SubmitHandler<FormInputType> = async (data) => {
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
      toast.success("Thank you! Your comment will be displayed once it's approved", {
        theme: 'dark',
      });
      setSubmitted(true);
      setIsSubmitting(false);

      if (form.current) {
        /* Sending an email when someone comments on a post */
        emailjs.sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );
      }
    } catch (err) {
      setSubmitted(false);
      setIsSubmitting(false);
      toast.error('Oops! Something went wrong. Try again later');
    }
  };

  const { percentageScrollPosition } = useProgressBar();

  const {
    data: postData,
    isLoading,
    isError,
  } = useQuery<Post>(['post', slug], () => fetchPost(slug));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !postData) {
    return <NotFound />;
  }

  return (
    <>
      <ProgressBar scroll={percentageScrollPosition} />
      <SectionWrapper>
        <BlogTitle>{postData.title}</BlogTitle>
        <BlogDesc>{postData.description}</BlogDesc>
        <AuthorSection>
          <div>
            {postData.author && (
              <AuthorImg
                src={imgLink(postData.author.image)}
                alt={postData.title}
                onClick={() => window.open('https://github.com/Karim-Chammout', '_blank')}
              />
            )}
          </div>
          <div style={{ marginLeft: '10px' }}>
            <AuthorName>{postData.author.name}</AuthorName>
            <DisplayDate
              textLabel="Published on"
              date={postData.publishedAt}
              extraStyles={{ margin: '0 0 5px 0' }}
            />
            <DisplayDate
              textLabel="Last updated on"
              date={postData._updatedAt}
              extraStyles={{ margin: '5px 0' }}
            />
          </div>
        </AuthorSection>
        {postData.mainImage && (
          <Img
            src={imgLink(postData.mainImage)}
            alt={postData.title}
            onClick={() => window.open(imgLink(postData.mainImage), '_blank')}
          />
        )}
        <PortableStyles>
          <PortableText value={postData.body} components={CustomComponents} />
        </PortableStyles>
        <Line />
        {!submitted && (
          <StyledForm ref={form}>
            <LikedArticle>
              <Text style={{ fontWeight: 'bold' }}>Liked this article?</Text>
              <Text>Leave a comment bellow!</Text>
            </LikedArticle>

            <input {...register('_id')} type="hidden" name="_id" value={postData._id} />
            <input type="hidden" name="post_name" value={postData.title} />

            <Label>
              <span>Name</span>
              <Input
                {...register('name', { required: true })}
                placeholder="Your name"
                type="text"
                name="name"
                hasError={!!errors.name}
              />
            </Label>
            <Label>
              <span>Email</span>
              <Input
                {...register('email', { required: true })}
                placeholder="Your email"
                type="email"
                name="email"
                hasError={!!errors.email}
              />
            </Label>
            <Label>
              <span>Comment</span>
              <TextArea
                {...register('comment', { required: true })}
                placeholder="Your comment"
                name="comment"
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
          <SubmittedWrapper>
            <h5 style={{ margin: 0, fontSize: '1.5em' }}>Thanks for submitting your comment</h5>
            <p style={{ marginBottom: 0 }}>Your comment will be displayed once it's approved</p>
          </SubmittedWrapper>
        )}
        {postData.comments && postData.comments?.map((c) => <Comments key={c._id} comments={c} />)}
      </SectionWrapper>
      <ScrollToTop />
    </>
  );
};

export default BlogDetails;
