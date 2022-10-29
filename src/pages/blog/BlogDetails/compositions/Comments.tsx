import { CommentType } from '../../types';
import {
  Comment,
  CommentAvatar,
  CommentContainer,
  CommentName,
  CommentSection,
} from '../BlogDetails.style';
import DisplayDate from './DisplayDate';

const Comments = ({ comments }: { comments: CommentType }) => {
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
          <Comment>{comments.comment}</Comment>
        </div>
      </CommentContainer>
    </CommentSection>
  );
};

export default Comments;
