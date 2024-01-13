import type { PostData } from './post.type';
import { FiltersProvider } from './filters.provider';
import { PostsProvider } from './posts.provider';
import { FilterPanel } from './FilterPanel';
import { PostList } from './PostList';

type PostsProps = {
  data: PostData[];
  children?: JSX.Element | JSX.Element[],
};
export function Posts({ data, children }: PostsProps) {
  return (
    <FiltersProvider>
      <PostsProvider data={data}>
        {children}
      </PostsProvider>
    </FiltersProvider>
  )
}
Posts.FilterPanel = FilterPanel;
Posts.PostList = PostList;
