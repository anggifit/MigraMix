import { useState, useMemo } from 'react'
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from "prop-types";


const DateRangeEvent = ({onChange}) => {
    const [dateSelected, setDateSelected] = useState(null)
/*     const [error, setError] = useState(null); */
/*     const [isCalendarOpen, setIsCalendarOpen] = useState(false);
 */
    const handlerDateClick = (date) => {
        setDateSelected(date);
        onChange(date)
    }
    
/*     const toggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen);
    }; */

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box 
                width={170}
            >
                <DatePicker
                    value={dateSelected} 
                    onChange={handlerDateClick}
/*                  minDate={minDateAllowed}
                    maxDate={maxDateAllowed} 
                    disableOpenPicker={false}*/
                    InputProps={{ style: { fontSize: '16px' } }} 
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                    sx={{
                        '& .MuiInputBase-root': {
                            borderWidth: '0.8px', 
                            borderColor: '#2B2D42'
                        },
                    }}
                />
            </Box>
        </LocalizationProvider>
    );
}

DateRangeEvent.propTypes = {
    onChange: PropTypes.func.isRequired
}
export default DateRangeEvent
