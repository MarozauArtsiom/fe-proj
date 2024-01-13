import type { CommentData, PostData } from '../post.type';
import { getRatingString } from '../utils';
import { usePostsContext } from '../posts.provider';

import classes from './PostList.module.css';

export function PostList() {
  const { posts } = usePostsContext();

  return (
    <ul>
      {posts.map((props, i) => (
        <li
          key={`post_id_${i}`} // TODO: Just as a quick solution, should be real ID
        >
          <Post {...props} />
        </li>
      ))}
    </ul>
  );
}

function Post({ rating, text, author, avatar_url, created, comments }: PostData) {
  const hasComments = Array.isArray(comments) && comments.length > 0;

  return (
    <div className={classes.Post}>
      <div>
        {getRatingString(rating)}
      </div>
      <div className={classes.AuthorInfo}>
        <img src={avatar_url} className={classes.Avatar} />
        <span className={classes.AuthorName}>{author}</span>
        <span className={classes.CreationDate}>{created?.substring(0, 10)}</span>
      </div>
      <div className={classes.CommentText}>{text}</div>
      {hasComments && <CommentsList comments={comments} />}
    </div>
  );
}

type CommentListProps = {
  comments: CommentData[];
};
function CommentsList ({ comments }: CommentListProps) {
  return (
    <ul className={classes.CommentList}>
      {comments.map((comment, i) => (
        <li
          key={`id_c_${i}`} // TODO: Just as a quick solution, should be real ID
        >
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
}

type CommentProps = CommentData;
function Comment({ author, text, comments }: CommentProps) {
  const hasComments = Array.isArray(comments) && comments.length > 0;

  return (
    <div>
      <div>
        <strong>{author}</strong>
      </div>
      <div className={classes.CommentText}>{text}</div>
      <div>
        {hasComments && <CommentsList comments={comments} />}
      </div>
    </div>
  );
}
