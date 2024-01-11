import { useCallback, useEffect, useState, useTransition } from 'react';
import type { AvailableFilters, FilterState, CommentData, PostData } from './post.type';
import { FilterPanel } from './FilterPanel';
import { getRatingString } from './utils';
import classes from './Posts.module.css';
console.log(classes);

type PostsProps = {
  data: PostData[];
  filters?: AvailableFilters[],
  filterDefaults?: FilterState;
};
export function Posts({ data, filters, filterDefaults }: PostsProps) {
  const [filteredData, setFilteredData] = useState<PostData[]>([]);
  const [, startTransition] = useTransition();

  const hasFilters = Array.isArray(filters) && filters.length > 0;

  const handleFilterChange = useCallback((filterState: FilterState | null) => {
    let newFilteredData = data;

    if (filterState?.rating) {
      newFilteredData = newFilteredData.filter(({ rating }) => rating === filterState.rating);
    }

    startTransition(() => {
      setFilteredData(newFilteredData);
    });
  }, [data]);

  useEffect(() => {
    if (!hasFilters) {
      setFilteredData(data);
    }
  }, [data, hasFilters]);

  return (
    <div>
      {hasFilters && (
        <FilterPanel
          filters={filters}
          filterDefaults={filterDefaults}
          onChange={handleFilterChange}
        />
      )}
      <PostList data={filteredData} />
    </div>
  )
}

type PostListProps = {
  data: PostData[];
};
function PostList({ data }: PostListProps) {
  return (
    <ul>
      {data.map((props, i) => (
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
      <hr/>
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
