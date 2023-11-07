
import { useState } from "react";
import { useForm} from "react-hook-form";
import axios from "axios"
import {Avatar, CssBaseline, TextField, Grid, Box, Typography, Container, Stack, MenuItem} from '@mui/material';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UploadProfilePhoto from './UploadProfilePhoto';
import DateRangeEvent from "./DateRangeEvent";
import UrlValidation from "./UrlValidation";
import RedButton from "../RedButton"

const defaultTheme = createTheme();

const CreateEventSection = () => {
    const { register, handleSubmit, formState: { isValid, errors } } = useForm({
        defaultValues: {
            eventTitle: '',
            typeOfActivity: '',
            eventDescription: '',
            initialDate: null,
            finalDate: null, 
            urlEvent: '',  
            eventImage: null      
        }
    })
    
    /*  const token = localStorage.getItem('token'); */
    const [eventProfilePictureURL, setEventProfilePictureURL] = useState(null)
    const [selectedTypeOfActivity, setSelectedTypeOfActivity] = useState('Free');
    const [initialDateSelected, setInitialDateSelected] = useState(null)
    const [finalDateSelected, setFinalDAteSelected] = useState(null)

    const onImageUpload = (url) => {
        setEventProfilePictureURL(url); 
    };

    const handlerDateChange = (newDateRange) =>{
        setEventDates(newDateRange)
    }

    const onSubmit = (data) => {
        if (isValid) {
            data.eventImage = eventProfilePictureURL
            data.typeOfActivity = selectedTypeOfActivity
/*             data.initialDate = eventDates[0]
            data.finalDate = eventDates[1] */
            axios
            .post('aca va la url de crear evento', data, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => {console.log(response.data)})
            .catch((error) => {console.log(error.data);})
        }
        console.log(data)
    }
    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Container maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    backgroundColor: 'white',
                    }}
                >
                    <Avatar sx={{ m: 2, bgcolor: '#FF4B4B' }}>
                    <EditCalendarIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ color: '#2B2D42', fontWeight: 'bold'}}>
                    Create Event
                    </Typography>
                    <p className="mb-3 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    This information will be displayed publicly so be careful what you share.
                    </p>
                    <Box 
                    component="form" 
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                {...register("eventTitle", {
                                    maxLength : {
                                        value: 100,
                                        message: 'Maximum 100 characters' 
                                    }
                                })}
                                required
                                fullWidth
                                autoFocus
                                id="eventTitle"
                                label="Event Title"
                                InputProps={{ style: { fontSize: '16px' } }}
                                InputLabelProps={{ style: { fontSize: '16px' } }}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        borderWidth: '0.8px',
                                        borderColor: '#2B2D42'
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("eventDescription", {
                                maxLength : {
                                    value: 300,
                                    message: 'Maximum 300 characters' 
                                }
                                })}
                                fullWidth
                                autoFocus
                                autoComplete="eventDescription"
                                id="eventDescription"
                                label="Event Description: Write a few sentences your event."
                                InputProps={{ style: { fontSize: '16px' } }} 
                                InputLabelProps={{ style: { fontSize: '16px' } }}
                                    sx={{
                                    '& .MuiInputBase-root': {
                                        borderWidth: '0.8px', 
                                        borderColor: '#2B2D42'
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            {...register("eventPlannerMainLink", {validate:UrlValidation})}
                            fullWidth
                            id="eventPlannerMainLink"
                            label="Website"
                            autoComplete="Website"
                            error={!!errors.eventPlannerMainLink}
                            helperText={errors.eventPlannerMainLink && (
                                <Typography variant="caption" color="error">
                                    {errors.eventPlannerMainLink.message}
                                </Typography>
                            )}
                            InputProps={{ style: { fontSize: '16px' } }} 
                            InputLabelProps={{ style: { fontSize: '16px' } }}
                            sx={{
                                '& .MuiInputBase-root': {
                                borderWidth: '0.8px', 
                                borderColor: '#2B2D42'
                                },
                            }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            select
                            fullWidth
                            label="Type of Activity"
                            id="typeOfActivity"
                            value={selectedTypeOfActivity}
                            onChange={(e) => setSelectedTypeOfActivity(e.target.value)}
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
                                <MenuItem value="Free">Free</MenuItem>
                                <MenuItem value="Paid">Paid</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <p>fecha inicial</p>
                            <DateRangeEvent 
                                onChange={handlerDateChange}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <p>fecha final</p>
                            <DateRangeEvent 
                                onChange={handlerDateChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <UploadProfilePhoto onImageUpload={onImageUpload}/>
                        </Grid>
                    </Grid>
                    <Stack 
                        alignItems="center"
                    >
                        <RedButton info="Save" widen size="large"/>
                    </Stack>
                    </Box>
                </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default CreateEventSection
