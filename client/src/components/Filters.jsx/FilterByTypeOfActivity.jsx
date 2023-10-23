import {Select, MenuItem, Box, InputLabel} from '@mui/material';


const FilterByTypeOfActivity = ({onFilterChange}) => {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.value);
      };

    return (
        <Box sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Filtrar por tipo de actividad:</InputLabel>
        <Select value="" onChange={handleFilterChange}>
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="free">Gratis</MenuItem>
            <MenuItem value="paid">Pagado</MenuItem>
        </Select>
        </Box>
    )
}

export default FilterByTypeOfActivity
