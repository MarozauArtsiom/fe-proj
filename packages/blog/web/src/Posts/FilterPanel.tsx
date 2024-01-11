import { useEffect, useState } from 'react';
import { RATINGS, type AvailableFilters, type FilterState, type Rating } from './post.type'
import { getRatingString } from './utils';
import classes from './FilterPanel.module.css';

type FilterPanelProps = {
  filters?: AvailableFilters[],
  filterDefaults?: FilterState,
  onChange?: (filterState: FilterState | null) => void
};

export function FilterPanel({ filters, filterDefaults, onChange }: FilterPanelProps) {
  const [rating, setRating] = useState<0 | Rating>(0);

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(parseInt(e.target.value) as  | Rating);
  };

  const hasFilters = Array.isArray(filters) && filters.length > 0;
  const hasRatingFilter = hasFilters && filters.includes('rating');

  useEffect(() => {
    if (!filterDefaults) return;

    if (filterDefaults?.rating) setRating(filterDefaults.rating)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let filterState = null;

    if (rating) {
      filterState = { ...(filterState ?? {}), rating };
    }
    
    onChange?.(filterState);
  }, [onChange, rating]); // Other filter states should be added as dependency


  if (!hasFilters) return null;

  return (
    <div className={classes.FilterPanel}>
      <h2>Filter panel:</h2>
      {hasRatingFilter && (
        <div>
          <label htmlFor='rating-select'>Select rating:</label>
          <select name="rating" id="rating-select" value={rating} onChange={handleRatingChange}>
            <option key="0" value="0">--Please choose an option--</option>
            {RATINGS.map((rating) => <option key={rating} value={rating}>{getRatingString(rating)}</option>)}
          </select>
        </div>
      )}
    </div>
  );
}
