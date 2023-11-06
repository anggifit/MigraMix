import { useState } from "react";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateRangeEvent = ({onChange}) => {
    const [dateRange, setDateRange] = useState([null, null])

    const handlerDateChange = (newDateRange) => {
        setDateRange(newDateRange)
        onChange(newDateRange)
    }


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box width={300}>
                <DateRangePicker
                    value={dateRange}
                    onChange={handlerDateChange}
                    startText="Initial Date"
                    endText="Final Date"
                    disableOpenPicker={false}
                    InputProps={{ style: { fontSize: '16px' } }}
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                    sx={{
                        '& .MuiInputBase-root': {
                            borderWidth: '0.8px',
                            borderColor: '#2B2D42',
                        },
                    }}
                />
            </Box>
        </LocalizationProvider> 
    )
}

export default DateRangeEvent