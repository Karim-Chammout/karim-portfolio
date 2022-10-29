import { Comment } from '../../types';
import {
  CommentAvatar,
  CommentContainer,
  CommentName,
  CommentSection,
  CommentText,
} from '../BlogDetails.style';
import DisplayDate from './DisplayDate';

const Comments = ({ comments }: { comments: Comment }) => {
  return (
    <CommentSection key={comments._id}>
      <DisplayDate
        textLabel="Published on"
        date={comments._createdAt}
        extraStyles={{ margin: '0 0 5px 70px' }}
      />
      <CommentContainer>
        <CommentAvatar>{comments.name.substring(0, 1).toUpperCase()}</CommentAvatar>
        <div style={{ marginLeft: '20px' }}>
          <CommentName>{comments.name}</CommentName>
          <CommentText>{comments.comment}</CommentText>
        </div>
      </CommentContainer>
    </CommentSection>
  );
};

export default Comments;
