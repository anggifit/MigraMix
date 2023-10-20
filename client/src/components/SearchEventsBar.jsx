import {Container, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


function SearchEventsBar({onSearch}) {
  const [titleFilter, setTitleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const handleTitleFilterChange = (event) => {
    const eventValue = event.target.value
    setTitleFilter(eventValue);
    onSearch({title: eventValue})
  };
  const handleDateFilterChange = (event) => {
    const eventValue = event.target.value
    setDateFilter(eventValue);
    onSearch({date: eventValue})
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
          <TextField
            id="dateFilter"
            type="search"
            label="By Date"
            value={dateFilter}
            onChange={handleDateFilterChange}
            sx={{ width: 600 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="priceFilter"
            type="search"
            label="Free or Paid"
            value={priceFilter}
            onChange={handlePriceFilterChange}
            sx={{ width: 600 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
      </Stack>
    </Container>
  );
}
// SearchEventsBar.propTypes = {
//   onSearch: PropTypes.onSearch.isRequired, 
// };
export default SearchEventsBar