import React, { useState } from 'react';
import SearchBar from './components/ui/SearchBar';
import SearchResults from './components/ui/SearchResults';
import TimelineSearch from './components/searches/TimelineSearch';
import { Stack } from '@mui/material';
import CategorySearch from './components/searches/CategorySearch'

function App() {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const [selectedKeyword, setSelectedKeyword] = useState('');
  const keywords = ['Running', 'Casual', 'Training', 'Basketball'];

  const shoeBrands = [
    { name: 'Nike', opinion: 'Reliable and comfortable.', category: 'Running' },
    { name: 'Adidas', opinion: 'Stylish and durable.', category: 'Casual' },
    { name: 'Reebok', opinion: 'Great for running.', category: 'Basketball' },
  ];

  const filterResults = (query = searchQuery, keyword = selectedKeyword) => {
    let filteredResults = shoeBrands;

    if (query) {
      filteredResults = filteredResults.filter((brand) =>
        brand.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (keyword) {
      filteredResults = filteredResults.filter((brand) =>
        brand.category.toLowerCase() === keyword.toLowerCase()
      );
    }

    setResults(filteredResults);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterResults(query, selectedKeyword); // Pass current query and keyword directly
  };

  const handleKeywordSelect = (keyword) => {
    setSelectedKeyword(keyword);
    filterResults(searchQuery, keyword); // Pass current search query and the newly selected keyword
  };

  // Handler for when the time range changes
  const handleTimeRangeChange = (timeRange) => {
    console.log('Selected Time Range:', timeRange);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Shoe brand opinion machine</h1>
      <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
        <SearchBar onSearch={handleSearch} />
        <TimelineSearch onChange={handleTimeRangeChange} />
        <CategorySearch keywords={keywords} onKeywordSelect={handleKeywordSelect} />
      </Stack>
      <h2>SearchResults</h2>
      <SearchResults results={results} /> 
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <strong>{result.name}</strong>: {result.opinion}
              </li>
            ))}
          </ul>
        ) : searchQuery.length > 0 ? (
          <p>No results found.</p>
        ) : null}
      </div>
    </div>
  );
}

export default App;