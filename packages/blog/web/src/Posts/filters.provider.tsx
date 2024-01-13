import * as React from 'react';
import type { Rating } from './post.type';

export type AvailableFilters = 'rating';
export type FilterState = {
  rating?: Rating;
};
export type FilterContext = {
  filters: FilterState,
  setFilters: (state: FilterState) => void,
};

const FiltersContext = React.createContext<FilterContext | undefined>(undefined);

export const FiltersProvider = ({ f, children }: { f?: FilterState, children: JSX.Element }) => {
  const [filters, setFilters] = React.useState<FilterState>(f ?? {});
  const value = { filters, setFilters };

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
}

export const useFiltersContext = (): FilterContext => {
  const filtersContext = React.useContext(FiltersContext);

  if (filtersContext === undefined) {
    throw new Error('useFiltersContext should be used inside a FiltersProvider');
  }

  return filtersContext;
};
