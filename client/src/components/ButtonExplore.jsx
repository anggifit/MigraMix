import { Button } from "@mui/material";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const CustomButton = styled(Button)({
  borderRadius: "30px",
  textTransform: "none",
});

const ButtonExplore = () => {
  const navigate = useNavigate();

  const handleDiscoverEventClick = () => {
    navigate("/events");
  };
  const handleExploreArtistsClick = () => {
    navigate("/artistsPage");
  };

  const handleMixEventsClick = () => {
    const mixEventsElement = document.getElementById("mixEventsSection");
    mixEventsElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="m-auto">
      <Stack
        spacing={3}
        direction="row"
        justifyContent={{ base: "center", md: "flex-start" }} // Center on small screens, left-align on medium and larger screens
        alignContent="center"
      >
        <RouterLink to="/api/artistsPage">
          <CustomButton
            style={{
              backgroundColor: "transparent",
              color: "#DA0707",
              borderColor: "#DA0707",
              borderRadius: "7px",
              borderWidth: "2px",
            }}
            disabled={false}
            size="medium"
            variant="outlined"
            onClick={handleExploreArtistsClick}
          >
            Explore Artists
          </CustomButton>
        </RouterLink>
        <CustomButton
          style={{
            backgroundColor: "#F70808",
            color: "white",
            borderColor: "#DA0707",
            borderRadius: "7px",
          }}
          disabled={false}
          size="medium"
          variant="outlined"
          onClick={handleMixEventsClick}
        >
          MixBarcelona Events
        </CustomButton>
        <RouterLink to="/events">
          <CustomButton
            style={{
              backgroundColor: "transparent",
              color: "#DA0707",
              borderColor: "#DA0707",
              borderRadius: "7px",
              borderWidth: "2px",
            }}
            disabled={false}
            size="medium"
            variant="outlined"
            onClick={handleDiscoverEventClick}
          >
            More Events
          </CustomButton>
        </RouterLink>
      </Stack>
    </div>
  );
};

export default ButtonExplore;
