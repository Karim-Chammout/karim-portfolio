import { formatedDate } from '../../../../utils/formatDate';
import { Comment } from '../../types';
import {
  Avatar,
  CommentContent,
  CommentDate,
  CommentHeader,
  CommentName,
  CommentText,
  Container,
  Wrapper,
} from '../BlogDetails.style';

const Comments = ({ comments }: { comments: Comment }) => {
  return (
    <Wrapper key={comments._id}>
      <Container>
        <Avatar>{comments.name.substring(0, 1).toUpperCase()}</Avatar>
        <CommentContent>
          <CommentHeader>
            <CommentName>{comments.name}</CommentName>
            <CommentDate>{formatedDate(comments._createdAt)}</CommentDate>
          </CommentHeader>
          <CommentText>{comments.comment}</CommentText>
        </CommentContent>
      </Container>
    </Wrapper>
  );
};

export default Comments;
