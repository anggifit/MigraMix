import { TextField, MenuItem } from "@mui/material"

const SelectOptions = ({label, idField, value, onChange, options}) => {
  return (
    <TextField
        required
        select
        fullWidth
        label={label}
        id={idField}
        value={value}//  const [selectedValue, setSelectedValue] = useState('none');
        onChange={onChange} //(e) => setSelectedValue(e.target.value)}
        InputProps={{ style: { fontSize: '16px' } }}
        InputLabelProps={{ style: { fontSize: '16px' } }}
        sx={{
            '& .MuiInputBase-root': {
            borderWidth: '0.8px',
            borderColor: '#2B2D42',
            maxWidth: 170,
            },
        }}    
    >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  )
}

export default SelectOptions
