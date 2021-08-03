import React, { useContext, useState } from 'react';

const SearchContext = React.createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('Search provider not available');
  }

  return context;
};

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('wizeline');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
