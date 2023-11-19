import { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import UserContext from "./UserContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <RouterLink color="inherit" to="/">
        Migramix Team
      </RouterLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInForm() {
  const [authenticationSuccessful, setAuthenticationSuccessful] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const {setRole} = useContext(UserContext)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };


  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = { ...errors };

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors); // Update the state with error messages

    // Check if there are any errors; if errors exist, the form is invalid
    if (Object.values(newErrors).some((error) => error !== "")) {
      console.log("Form is invalid. Please fix the errors.");
    } else {
      // Form is valid; proceed with form submission
      /* const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      }); */
      onSubmit(formData);
    }
  };

  const navigate = useNavigate()
  
  const onSubmit = (data) => {
    // Extract username and password from the form data
    const { email, password } = data; // Update variable names to match your form fields
    
    // Check if both email and password are provided
    if (email && password) {
      axios
      .post(
          "/api/sign-in",
          { email, password }, // Use the extracted email and password
          {
            headers: { "Content-Type": "application/json" },
          }
          )
          .then((response) => {
            if (response.status === 201) {
              setAuthenticationSuccessful(true)
              setRole(response.data.role)
              localStorage.setItem("role", response.data.role)
              localStorage.setItem('token', response.data.token)
              navigate('/admin-dashboard')
            }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    } else {
      // Handle the case where either email or password is missing
      console.log("Email and password are required");
    }
  };

  return (
    <div>
      {authenticationSuccessful && <AdminDashboard />}
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(/images/SignUpImg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
  {/*           {authenticationSuccessful ? (
              <AdminDashboard/>
            ) :
            ( */}
              <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit} 
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email} // Set error to true if there's an error message
                    helperText={errors.email} // Display the error message here
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!errors.password} // Set error to true if there's an error message
                    helperText={errors.password} // Display the error message here
                  />

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    /* onSubmit={onSubmit} */
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                      sx={{ mt: 3, mb: 2, borderRadius: '24px', }}
                      
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>            
        </Grid>
      </ThemeProvider>
    </div>
  );
}