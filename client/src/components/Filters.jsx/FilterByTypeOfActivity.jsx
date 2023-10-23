import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';


const FilterByTypeOfActivity = ({onFilterChange}) => {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.value);
      };

    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">By Type</InputLabel>
            <Select value="" onChange={handleFilterChange}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="free">Free</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
            </Select>
        </FormControl>
    )
}

export default FilterByTypeOfActivity
