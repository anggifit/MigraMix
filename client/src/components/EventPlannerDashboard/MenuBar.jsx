import { Card,Typography,List,ListItem,ListItemPrefix} from "@material-tailwind/react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FestivalIcon from '@mui/icons-material/Festival';
import EventPlannerHeader from './EventPlannerHeader'

function MenuBar() {
        return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 bg-gradient-to-t from-red-300 to-neutral-50 shadow-lg shadow-red-300">
            <div className="mb-4 p-6">
                <EventPlannerHeader 
                    user="Aca va el nombre"
                    profilePhoto="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
            </div>
            <List>
            <ListItem className="mb-2 p-4">
                <ListItemPrefix>
                    <ManageAccountsIcon/>
                </ListItemPrefix>
                Edit Profile
            </ListItem>
            <ListItem className="mb-2 p-4">
                <ListItemPrefix>
                    <EditCalendarIcon/>
                </ListItemPrefix>
                Create Event
            </ListItem>
            <ListItem className="mb-2 p-4">
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

export default MenuBar