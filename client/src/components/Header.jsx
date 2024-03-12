import { Stack, Typography, useTheme } from "@mui/material"; // Import necessary components from Material-UI
import ButtonExplore from "./ButtonExplore";
import ButtonLogin from "./ButtonLogin";
function Header() {
  const theme = useTheme();
  return (
    <div className="p-8 m-auto">
      <ButtonLogin />
      <Typography
        variant="h1"
        classes={{
          root: "text-xs xs:text-xs text-center text-[#ED0707] transition duration-300 ease-in-out hover:scale-90",
        }}
        sx={{
          fontSize: {
            xs: "3rem", 
            sm: "2rem",
            md: "3.4rem", 
          },
          fontFamily: "Gayathri, sans-serif",
          fontWeight: "bold",
          letterSpacing: "2px",
          [theme.breakpoints.up("md")]: {
            fontSize: "7rem",
          },
        }}
      >
        MIGRAMIX
      </Typography>
      <div className="mt-auto text-base md:text-lg lg:text-lg text-blue text-custom p-7 text-center">
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            margin: "10px",
            color: "#2D3142",
            letterSpacing: "1px",
          }}
        >
          Welcome to a vibrant platform showcasing emerging migrant artists in
          Barcelona´s electronic music scene.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            margin: "10px",
            color: "#2D3142",
            letterSpacing: "1px",
          }}
        >
          <a href="#">
            Let´s unite through music, creativity, and cultural diversity.
          </a>
        </Typography>
      </div>
      <Stack direction="row" spacing={2} justifyContent="center" mt={6}>
        <ButtonExplore />
      </Stack>
    </div>
  );
}
export default Header;











