import { RatingFilter } from './RatingFilter';
import classes from './FilterPanel.module.css';

type FilterPanelProps = {
  children: JSX.Element | JSX.Element[];
};

export function FilterPanel({ children }: FilterPanelProps) {
  return (
    <div className={classes.FilterPanel}>
      <h2>Filter panel:</h2>
      <div>
        {children}
      </div>
    </div>
  );
}
FilterPanel.RatingFilter = RatingFilter;
