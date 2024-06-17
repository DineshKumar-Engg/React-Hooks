import React from 'react';

const SearchResults = ({ items }) => {
  return (
    <ul>
      {items?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default SearchResults;
