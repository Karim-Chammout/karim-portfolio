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
  const { _id, name, comment, _createdAt } = comments;

  return (
    <Wrapper key={_id}>
      <Container>
        <Avatar>{name.substring(0, 1).toUpperCase()}</Avatar>
        <CommentContent>
          <CommentHeader>
            <CommentName>{name}</CommentName>
            <CommentDate>{formatedDate(_createdAt)}</CommentDate>
          </CommentHeader>
          <CommentText>{comment}</CommentText>
        </CommentContent>
      </Container>
    </Wrapper>
  );
};

export default Comments;
