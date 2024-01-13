import * as React from 'react';
import type { PostData } from './post.type';
import { useFiltersContext } from './filters.provider';

export type PostContext = {
  posts: PostData[],
  setPosts: (state: PostData[]) => void,
};

const PostsContext = React.createContext<PostContext | undefined>(undefined);

type PostProviderProps = {
  data: PostData[];
  children?: JSX.Element | JSX.Element[];
};
export const PostsProvider = ({ data, children }: PostProviderProps) => {
  const { filters } = useFiltersContext();
  const [posts, setPosts] = React.useState<PostData[]>([]);

  const value = { posts, setPosts };

  React.useEffect(() => {
    let filteredPosts = data;

    if (filters.rating) {
      filteredPosts = data.filter(({ rating }) => rating === filters.rating);
    }  

    setPosts(filteredPosts);
  }, [data, filters]);

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
}

export const usePostsContext = (): PostContext => {
  const postsContext = React.useContext(PostsContext);

  if (postsContext === undefined) {
    throw new Error('usePostsContext should be used inside a PostsProvider');
  }

  return postsContext;
};
