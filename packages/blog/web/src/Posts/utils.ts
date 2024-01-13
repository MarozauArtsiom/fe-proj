import { RATINGS, type Rating } from './post.type'

export const getRatingString = (rating: Rating): string => `${'★'.repeat(rating)}${'☆'.repeat(RATINGS.length - rating)}`;
