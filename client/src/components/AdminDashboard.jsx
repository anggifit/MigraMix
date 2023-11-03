import React from "react"
import ArtistDashboard from "./ArtistDashboard/ArtistDashboard"
import EventPlannerDashboard from "./EventPlannerDashboard/EventPlannerDashboard"
import UserContext from "./UserContext"


const AdminDashboard = () => {
    const {role} = React.useContext(UserContext)

    if (role === "Artist") {
        return <ArtistDashboard/>
    } else if (role === "Organizer"){
        return <EventPlannerDashboard/>
    } else {
        return <div>No role assigned</div>
    }
}

export default AdminDashboard
