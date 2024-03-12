import { useEffect, useState } from "react";
import { useForm} from "react-hook-form";
import axios from "axios"
import {Avatar, CssBaseline, TextField, Grid, Box, Typography, Container, Stack} from '@mui/material';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import UploadProfilePhoto from './UploadProfilePhoto';
import DateRangeEvent from "./DateRangeEvent";
import UrlValidation from "./UrlValidation";
import RedButton from "../RedButton"
import SelectOptions from "../SelectOptions";
import SuccesfullModal from '../SignUp/SuccesfullModal'


const defaultTheme = createTheme();

const CreateEventSection = () => {
    const { register, setValue, handleSubmit, formState: { isValid, errors } } = useForm({
        defaultValues: {
            eventTitle: '', 
            eventDescription: '',
            urlEvent: '',  
            typeOfActivity: '',
            artistEvent:'',
            initialDate: null,
            finalDate: null, 
            eventImage: null      
        }
    })
    
    const token = localStorage.getItem('token');

    const [eventProfilePictureURL, setEventProfilePictureURL] = useState(null)
    const [selectedTypeOfActivity, setSelectedTypeOfActivity] = useState('Free');
    const [artistData, setArtistData] = useState([])
    const [selectedArtist, setSelectedArtist] = useState(artistData.length > 0 ? artistData[0].username : '')
    const [initialDateSelected, setInitialDateSelected] = useState(null)
    const [finalDateSelected, setFinalDateSelected] = useState(null)
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    
    dayjs.extend(isSameOrAfter)
    dayjs.extend(isSameOrBefore)

    
    const handlerInitialDateChange = (newInitialDate) =>{
        const currentDate = dayjs()
        
        if (newInitialDate.isSameOrAfter(currentDate, 'day')) {
            setInitialDateSelected(newInitialDate.format('YYYY-MM-DD'))
            setValue('initialDate', newInitialDate)
            setError('')
        } else {
            setError('The selected date should be today or in the future.');
        }
    }
    
    const handlerFinalDateChange = (newFinalDate) =>{
        const initialDate = dayjs(initialDateSelected)
        
        if(newFinalDate.isSameOrAfter(initialDate, 'day')) {
            setFinalDateSelected(newFinalDate.format('YYYY-MM-DD'))
            setValue('finalDate', newFinalDate)
            setError('')            
        } else {
            setError('The final date should be the same or after the initial date.')
        }
    }

    const onImageUpload = (url) => {
        setEventProfilePictureURL(url);
    };

    useEffect(() => {
        fetchArtistData();
        async function fetchArtistData() {
        try {
            const response = await axios.get(
            `https://mmx-server.vercel.app/api/artists/artistsList`
            );
            if (response.status !== 200) {
                throw new Error("Network response was not ok");
            }
                const data = response.data
                setArtistData(data)
        }                
        catch (error) {
            setError(error)
        }  
        }
    }, [])

    const handleExitClick = () => {
        setOpen(false)
    }

    const onSubmit = (data) => {
        if (isValid) {
            data.eventImage = eventProfilePictureURL
            data.typeOfActivity = selectedTypeOfActivity
            data.artistEvent = selectedArtist
            data.initialDate = initialDateSelected
            data.finalDate = finalDateSelected
            axios
            .post(`https://mmx-server.vercel.app/api/events/events`, data, { 
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setOpen(true);
                }
            })
            .catch((error) => {console.log(error.data);})
        }
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
                    backgroundColor: 'white',
                    padding: '10px', 
                    '@media (max-width: 640px)': {
                        padding: '5px',
                        textAlign: 'center',
                        marginTop: '7rem'                        
                    }
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
                    sx={{ 
                        mt: 3,
                            '@media (max-width: 640px)': {
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center', 
                            }
                    }}>
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
                            {...register("urlEvent", {validate:UrlValidation})}
                            fullWidth
                            id="urlEvent"
                            label="Website"
                            autoComplete="Website"
                            error={!!errors.urlEvent}
                            helperText={errors.urlEvent && (
                                <Typography variant="caption" color="error">
                                    {errors.urlEvent.message}
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
                        <Grid item xs={6} sm={3}>
                            <SelectOptions
                                label="Type of Activity"
                                idField="typeOfActivity"
                                value={selectedTypeOfActivity}
                                onChange={(e) => setSelectedTypeOfActivity(e.target.value)}
                                options={[
                                    { value: 'Free', label: 'Free' },
                                    { value: 'Paid', label: 'Paid' },
                                ]}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <SelectOptions 
                                key="artistsListEvent"
                                label="Artists"
                                idField="artists"
                                value={selectedArtist}
                                onChange={(e) => setSelectedArtist(e.target.value)}
                                options={artistData.map((artist)=> ({
                                    value: artist.username,
                                    label: artist.username,
                                }))}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={1}
                            >
                                <p>Initial date</p>
                                <DateRangeEvent 
                                    minDate={dayjs().toDate()}
                                    onChange={(date) => {
                                        setValue('initialDate', date)
                                        handlerInitialDateChange(date)
                                    }}
                                />
                                {error && <p>{error}</p>}
                            </Stack>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Stack 
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={1}
                            >
                                <p>Final Date</p>
                                <DateRangeEvent 
                                    onChange={(date) => {
                                        setValue('finalDate', date)
                                        handlerFinalDateChange(date)
                                    }}
                                    minDate={initialDateSelected ? dayjs(initialDateSelected).toDate() : dayjs().toDate()}
                                />
                                {error && <p>{error}</p>}
                            </Stack>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <UploadProfilePhoto onImageUpload={onImageUpload}/>
                        </Grid>
                    </Grid>
                    <Stack 
                        direction={{ xs: "column", sm: "row" }}
                        alignItems="center"
                        justifyContent="center"
                        spacing={8}
                        sx={{ 
                            padding: 2,
                        }}
                    >
                        <RedButton info="Save Event" widen size="large" type="submit"/>
                        <SuccesfullModal
                            open={open}
                            onClose={() => setOpen(false)}
                            onClick={handleExitClick}
                            description= "The event has been created successfully."
                            infoButton="Close" 
                        />
                    </Stack>
                    </Box>
                </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default CreateEventSection; 
