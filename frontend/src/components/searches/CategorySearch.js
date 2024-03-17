import React from 'react';

const CategorySearch = ({ keywords, onKeywordSelect }) => {
  return (
    <div>
      <h3>Select a Keyword:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {keywords.map((keyword, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <button onClick={() => onKeywordSelect(keyword)} style={{ padding: '5px 10px' }}>
              {keyword}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySearch;
