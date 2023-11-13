import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import PropTypes from "prop-types";


const FilterByTypeOfActivity = ({onFilterChange}) => {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">By Type</InputLabel>
            <Select value="" onChange={handleFilterChange}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="free">Free</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
            </Select>
        </FormControl>
        </div>
    )
}

FilterByTypeOfActivity.propTypes = {
    onFilterChange: PropTypes.func,
}

export default FilterByTypeOfActivity
