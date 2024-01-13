export const RATINGS = [1, 2, 3, 4, 5] as const;
export type Rating = typeof RATINGS[number];

export type PostData = {
  created: string;
  author: string;
  avatar_url: string;
  rating: Rating;
  text: string;
  comments?: CommentData[];
};

export type CommentData = {
  author: string;
  text: string;
  comments?: CommentData[];
};

export type AvailableFilters = 'rating'
export type FilterState = {
  rating?: Rating 
};
