import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const WelcomeSection = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '4 xs:p-6 sm:p-8 md:p-10 lg:p-14 xl:p-18 2xl:p-20',
            backgroundColor: 'white',
          }}
        >
          <Typography
            variant="h4"
            classes={{
              root: "text-sm sm:text-sm text-center text-[#F70808] outline-black transition duration-500 ease-in-out hover:scale-90",
            }}
            style={{ fontFamily: "Audiowide, sans-serif" }}
          >
            Welcome to Migramix!
          </Typography>
          <Typography
            variant="h6"
            className="text-base md:text-md lg:text-lg text-gray-900 text-center"
            style={{ lineHeight: '2' , marginTop: 18}}
          >
            Your personalized space to connect, create and celebrate! 
          </Typography>
          <Typography
            variant="body1"
            className="mt-6 text-base md:text-md lg:text-lg text-gray-900 text-center"
            style={{ lineHeight: '2' }}
          >
            Here, you will not only be able to put your unique touch on your profile, but also host amazing events with talented artists. Edit, adjust and show the world the best version of yourself in your versatile profile.
          </Typography>
          <Typography
            variant="body1"
            className="mt-6 text-base md:text-md lg:text-lg text-gray-900 text-center"
            style={{ lineHeight: '2' }}
          >
            Also, stay up to date with their events and discover the wonders that other members are preparing. Welcome to Migramix, where your creativity comes to life and the fun never ends!
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default WelcomeSection;
