/* import { useState, useMemo, useEffect } from "react"; */
/* import { useForm } from "react-hook-form"; */
/* import axios from "axios"; */
import {Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, MenuItem, Stack} from '@mui/material';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UploadProfilePhoto from './UploadProfilePhoto';
import RedButton from "../RedButton"

const defaultTheme = createTheme();

const ProfileSection = () => {
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
                    /* onSubmit={handleSubmit(onSubmit)} */
                    sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            /* {...register("firstName", { 
                            required: "First Name is required",
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "invalid Name"
                            }
                            })} */
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            /* error={!!errorsCache.firstName}
                            helperText={errorsCache.firstName && errorsCache.firstName.message.toString()} */
                            autoFocus
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
                            /* {...register("lastName", {
                            required: "Last Name is required",
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "invalid Last Name"
                            }
                            })} */
                            required
                            fullWidth
                            autoFocus
                            id="lastName"
                            label="Last Name"
                            autoComplete="family-name"
                            /* error={!!errorsCache.lastname}
                            helperText={errorsCache.lastName && errorsCache.lastName.message.toString()} */
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
                            /* {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 1,
                                message: 'Must be at least 1 character'
                            },
                            maxLength : {
                                value: 13,
                                message: 'Maximum 13 characters' 
                            }
                            })} */
                                required
                                fullWidth
                                autoFocus
                                autoComplete="Bio"
                                id="eventPlannerBio"
                                label="Bio: Write a few sentences about yourself."
                                /* error={!!errorsCache.username}
                                helperText={errorsCache.username && errorsCache.username.toString()} */
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
                            /* {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address"
                            }
                            })} */
                            required
                            fullWidth
                            id="eventPlannerMainLink"
                            label="Website"
                            autoComplete="Website"
                            /* error={!!errorsCache.email}
                            helperText={errorsCache.email && errorsCache.email.message.toString()} */
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
                            <UploadProfilePhoto/>
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
