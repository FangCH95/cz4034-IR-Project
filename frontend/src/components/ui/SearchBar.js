import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        type="text"
        placeholder="Search shoe brands..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button variant="contained" endIcon={<SearchIcon />}>
        Search
      </Button>
    </Stack>
  );
}

export default SearchBar;