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
        navigate("/artists")
    }
    
    return (
        <Stack spacing={3} direction="row" justifyContent='center'>
            <RouterLink to="/artists">
                <CustomButton 
                    style={{ backgroundColor: '#F70808', color: 'white' }}
                    disabled={false}
                    size="large"
                    variant="contained"
                    onClick={handleExploreArtistsClick}>
                        Explore Artists 
                </CustomButton>
            </RouterLink>
            <RouterLink to="/events">
                <CustomButton
                    style={{ backgroundColor: "#2D3142", color: "white" }}
                    disabled={false}
                    size="large"
                    variant="contained"
                    onClick={handleDiscoverEventClick}
                >
                    Discover Events
                </CustomButton>
            </RouterLink>
        </Stack>
    );
}

export default ButtonExplore

