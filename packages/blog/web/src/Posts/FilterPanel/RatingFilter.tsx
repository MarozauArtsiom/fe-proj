import * as React from 'react';
import { RATINGS, type Rating } from '../post.type'
import { useFiltersContext } from '../filters.provider';
import { getRatingString } from '../utils';

type RatingFilterProps = {
  defaultValue?: Rating;
  disabled?: boolean;
};

export function RatingFilter({ defaultValue, disabled = false  }: RatingFilterProps) {
  const { filters, setFilters } = useFiltersContext();

  React.useEffect(() => {
    if (defaultValue) setFilters({ ...filters, rating: defaultValue });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRating = parseInt(e.target.value) as | Rating;

    if (!newRating) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { rating, ...rest } = filters;
    
      setFilters({ ...rest });
    } else {
      setFilters({ ...filters, rating: newRating });
    }
  };

  return (
    <div>
      <label htmlFor='rating-select'>Select rating:</label>
      <select
        name="rating"
        id="rating-select"
        value={filters.rating}
        disabled={disabled}
        onChange={handleRatingChange}
      >
        <option key="0" value="0">--Please choose an option--</option>
        {
          RATINGS.map((rating) => (
            <option key={rating} value={rating}>{getRatingString(rating)}</option>)
          )
        }
      </select>
    </div>
);
}
