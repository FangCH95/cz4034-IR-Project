import React from 'react';

function SearchResults({ results }) {
  if (!Array.isArray(results)) {
    console.error('Expected results to be an array, but got:', results);
    return <p>No results found or invalid data format.</p>; // Placeholder for non-array data
  }

  return (
    <ul>
      {results.map((result, index) => (
        // Assuming each result is an object with properties like 'name' and 'opinion'
        <li key={index}>
          <strong>{result.name}</strong>: {result.opinion}
          {result.category && ` (${result.category})` /* Optional: Display category if available */}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;