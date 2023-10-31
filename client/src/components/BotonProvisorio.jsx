import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";


const BotonProvisorio = () => {
    const navigate = useNavigate()
    const handleDashboardArtistClick = () => {
        navigate("/DashboardArtist")
    }
    return (
        <Button 
            style={{ color: "#2D3142", border: "none"}}
            className="w-12" 
            variant="text" 
            onClick={handleDashboardArtistClick}
        >
            Dashboard Artist
        </Button>
    )
}

export default BotonProvisorio