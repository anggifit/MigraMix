import { useState } from "react";
import { useForm} from "react-hook-form";
import axios from "axios"
import {Avatar, CssBaseline, TextField, Grid, Box, Typography, Container, Stack} from '@mui/material';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UploadProfilePhoto from './UploadProfilePhoto';
import RedButton from "../RedButton"

const defaultTheme = createTheme();

const ProfileSection = () => {
    const { register, handleSubmit, formState: { isValid, errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            eventPlannerBio: '',
            eventPlannerMainLink:'',
            eventProfilePicture: null,
/*          username: '',
            email: '',
            password: '', */
        }
    })

    const isURLValid = (url) => {
        if (!url) return true;
        const urlRegex = /^(http|https):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,6}$/;
        if (!urlRegex.test(url)) {
            return "Please enter a valid website URL. The URL must start with http:// or https:// and have at least 3 characters.";
        }
        return true;
    };
    
    const token = localStorage.getItem('token');
    const [eventProfilePictureURL, setEventProfilePictureURL] = useState(null)

    const onImageUpload = (url) => {
        setEventProfilePictureURL(url); // Almacena la URL de la imagen en el estado
    };

    const onSubmit = (data) => {
        if (isValid){
            data.eventProfilePicture = eventProfilePictureURL;
            axios
            .put(`/api/organizer/update`, data, 
            {headers: {
                Authorization: `Bearer ${token}`
            }})//Supongo que aca va el id correspondiente
            .then(response => console.log(response.data))
            .catch(error => {console.log(error.data)})
        }
    }

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Container maxWidth="lg">
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
                    Edit Profile
                    </Typography>
                    <p className="mb-3 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    This information will be displayed publicly so be careful what you share.
                    </p>
                    <Box 
                    component="form" 
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                disabled
                                fullWidth
                                id="firstName"
                                label="First Name"
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
                                disabled
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoComplete="family-name"
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
                                {...register("eventPlannerBio", {
                                maxLength : {
                                    value: 300,
                                    message: 'Maximum 300 characters' 
                                }
                                })}
                                fullWidth
                                autoFocus
                                autoComplete="Bio"
                                id="eventPlannerBio"
                                label="Bio: Write a few sentences about yourself."
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
                            {...register("eventPlannerMainLink", {validate:isURLValid})}
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
                        <Grid item xs={12}>
                            <UploadProfilePhoto onImageUpload={onImageUpload}/>
                        </Grid>
                    </Grid>
                    <Stack 
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}
                    >
                        <RedButton info="Save" widen size="large"/>
                        <RedButton info="Edit" widen size="large"/>
                    </Stack>
                    </Box>
                </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}

ProfileSection.propTypes = {

}

export default ProfileSection
