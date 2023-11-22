import { Button } from '@mui/material'; 
import { styled } from '@mui/system'
import Stack from '@mui/material/Stack';
import { useNavigate} from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const CustomButton = styled(Button) ({
    borderRadius: '30px',
    textTransform: 'none',
})

const ButtonExplore = () => {
    const navigate = useNavigate()

    const handleDiscoverEventClick = () => {
        navigate("/events")
    }
    const handleExploreArtistsClick = () => {
        navigate("/artistsPage")
    }

    const handleMixEventsClick = () => {
        const mixEventsElement = document.getElementById('mixEventsSection')
        mixEventsElement.scrollIntoView({behavior : 'smooth'})
    } 

  return (
    <>
      {/* <Stack spacing={3} direction="row" justifyContent="center">
        <RouterLink to="/artistsPage">
          <CustomButton
            style={{ backgroundColor: "#F70808", color: "white" }}
            disabled={false}
            size="large"
            variant="contained"
            onClick={handleExploreArtistsClick}
          >
            Explore Artists
          </CustomButton>
        </RouterLink>
        <CustomButton
          style={{ backgroundColor: "#2D3142", color: "white" }}
          disabled={false}
          size="large"
          variant="contained"
          onClick={handleMixEventsClick}
        >
          Discover MixBarcelona Events
        </CustomButton>
        <RouterLink to="/events">
          <CustomButton
            style={{ backgroundColor: "#9C9FA5", color: "white" }}
            disabled={false}
            size="large"
            variant="contained"
            onClick={handleDiscoverEventClick}
          >
            More Events
          </CustomButton>
        </RouterLink>
      </Stack> */}
      <Stack spacing={3} direction="row" justifyContent="center">
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
            size="large"
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
          size="large"
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
            size="large"
            variant="outlined"
            onClick={handleDiscoverEventClick}
          >
            More Events
          </CustomButton>
        </RouterLink>
      </Stack>
    </>
  );
}

export default ButtonExplore

