import PropTypes from 'prop-types';
import {TextField, InputAdornment} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const FilterByEvent = ({onSearch}) => {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    };
    
    return (
        <div>
            <TextField
                id="titleFilter"
                label="By event"
                onChange={handleSearch}
                sx={{ width: 600 }}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                }}
        />
        </div>
    )
}

FilterByEvent.propTypes = {
    onSearch: PropTypes.func, 
}

export default FilterByEvent
