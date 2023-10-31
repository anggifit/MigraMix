import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";


const BotonProvisorio2 = () => {
    const navigate = useNavigate()
    const handleEventPlannerDashboardClick = () => {
        navigate("/EventPlannerDashboard")
    }
    return (
        <Button 
            style={{ color: "#2D3142", border: "none"}}
            className="w-12" 
            variant="text" 
            onClick={handleEventPlannerDashboardClick}
        >
            D. Organizer
        </Button>
    )
}

export default BotonProvisorio2