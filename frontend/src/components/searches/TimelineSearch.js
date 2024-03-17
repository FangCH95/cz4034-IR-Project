import React from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TimelineSearch({onChange}) {
  const [Time, setTime] = React.useState('Latest');

  const handleSelect = (event) => {
    // You can adjust the value to be more specific dates or adjust based on your backend needs
    setTime(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="timeLineSearch">Time</InputLabel>
        <Select
          labelId="timeLineSearch"
          id="timeSelect"
          value={Time}
          label="Time"
          onChange={handleSelect}
        >
          <MenuItem value={"Latest"}>Latest</MenuItem>
          <MenuItem value={"Last Week"}>Last Week</MenuItem>
          <MenuItem value={"Last Month"}>Last Month</MenuItem>
          <MenuItem value={"Last Year"}>Last Year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default TimelineSearch;