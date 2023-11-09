import { Card,List,ListItem,ListItemPrefix} from "@material-tailwind/react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FestivalIcon from '@mui/icons-material/Festival';
import EventPlannerHeader from './EventPlannerHeader'
import PropTypes from "prop-types";


function MenuBar({onMenuClick, profilePhoto }) {
        return (
        <Card className="h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 bg-gradient-to-t from-red-300 to-neutral-50 shadow-lg shadow-red-300">
            <div className="mb-4 p-6">
                <EventPlannerHeader 
                    user="Aca va el nombre"
                    rol="Aca va el tipo de rol"
                    profilePhoto={profilePhoto}
                />
            </div>
            <List>
            <ListItem 
                className="mb-2 p-4"
                onClick={() => onMenuClick('editProfile')}
            >
                <ListItemPrefix>
                    <ManageAccountsIcon/>
                </ListItemPrefix>
                Edit Profile
            </ListItem>
            <ListItem 
                className="mb-2 p-4"
                onClick={() => onMenuClick('createEvent')}
            >
                <ListItemPrefix>
                    <EditCalendarIcon/>
                </ListItemPrefix>
                Create Event
            </ListItem>
            <ListItem 
                className="mb-2 p-4"
                onClick={() => onMenuClick('myEvents')}

            >
                <ListItemPrefix>
                    <FestivalIcon/>
                </ListItemPrefix>
                My events
            </ListItem>
            <ListItem className="mb-2 p-4">
                <ListItemPrefix>
                    <ExitToAppIcon/>
                </ListItemPrefix>
                Log Out
            </ListItem>
            </List>
        </Card>
        );
    }

MenuBar.propTypes = {
    onMenuClick: PropTypes.func.isRequired,
    profilePhoto: PropTypes.string.isRequired
}

export default MenuBar