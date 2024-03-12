import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FestivalIcon from "@mui/icons-material/Festival";
import EventPlannerHeader from "./EventPlannerHeader";
import PropTypes from "prop-types";

function MenuBar({ onMenuClick, profilePhoto, username, fullname }) {
    const token = localStorage.getItem("token");

    const handleLogOut = async () => {
        try {
        localStorage.removeItem(`${token}`);
        window.location.href = "/";
        } catch (error) {
        console.error("Logout Failed");
        }
    };
    return (
        <Card className="h-full max-w-[20rem] xs:max-w-[12rem] bg-gradient-to-t from-red-300 to-neutral-50 shadow-lg shadow-red-300">
        <div className="mb-4 p-6">
            <EventPlannerHeader
            fullname={fullname}
            username={username}
            profilePhoto={profilePhoto}
            />
        </div>
        <List>
            <ListItem
            className="mb-2 p-4 sm:p-2 flex items-center sm:text-center 2xl:justify-start"
            onClick={() => onMenuClick("editProfile")}
            >
            <ListItemPrefix>
                <ManageAccountsIcon />
            </ListItemPrefix>
            <span className="hidden sm:inline p-3">Edit Profile</span>
            </ListItem>
            <ListItem
            className="mb-2 p-4 sm:p-2 flex items-center sm:mx-auto 2xl:justify-start"
            onClick={() => onMenuClick("createEvent")}
            >
            <ListItemPrefix>
                <EditCalendarIcon />
            </ListItemPrefix>
            <span className="hidden sm:inline p-3">Create Event</span>
            </ListItem>
            <ListItem
            className="mb-2 p-4 sm:p-2 flex items-center sm:mx-auto 2xl:justify-start"
            onClick={() => onMenuClick("myEvents")}
            >
            <ListItemPrefix>
                <FestivalIcon />
            </ListItemPrefix>
            <span className="hidden sm:inline p-3">My events</span>
            </ListItem>
            <ListItem
            className="mb-2 p-4 sm:p-2 flex items-center sm:mx-auto 2xl:justify-start"
            onClick={handleLogOut}
            >
            <ListItemPrefix>
                <ExitToAppIcon />
            </ListItemPrefix>
            <span className="hidden sm:inline p-3">Log Out</span>
            </ListItem>
        </List>
        </Card>
    );
}

MenuBar.propTypes = {
  onMenuClick: PropTypes.func,
  profilePhoto: PropTypes.string,
  username: PropTypes.string,
  fullname: PropTypes.string,
};

export default MenuBar;
