import {Container, InputAdornment, Stack, TextField, InputLabel, MenuItem, FormControl } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

function SearchEventsBar({onSearch}) {
  const [titleFilter, setTitleFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const handleTitleFilterChange = (event) => {
    const eventValue = event.target.value
    setTitleFilter(eventValue);
    onSearch({title: eventValue})
  };

  const handlePriceFilterChange = (event) => {
    const eventValue = event.target.value
    setPriceFilter(eventValue);
    onSearch({price: eventValue})
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }} className="container mx-auto px-4">
      <Stack 
          direction="row" 
          spacing={3} 
          alignItems='center'
          justifyContent='space-between'
      >         
          <TextField
            id="titleFilter"
            type="search"
            label="By event"
            value={titleFilter}
            onChange={handleTitleFilterChange}
            sx={{ width: 600 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Type of activity</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={priceFilter}
              label="Type of activity"
              onChange={handlePriceFilterChange}
            >
              <MenuItem><em>None</em></MenuItem>
              <MenuItem>Free</MenuItem>
              <MenuItem>Paid</MenuItem>
            </Select>
          </FormControl>
      </Stack>
    </Container>
  )
}
SearchEventsBar.propTypes = {
  onSearch: PropTypes.func.isRequired, 
}
export default SearchEventsBar