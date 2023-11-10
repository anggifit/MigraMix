import { useContext, useState, useEffect } from "react"
import ArtistDashboard from "./ArtistDashboard/ArtistDashboard"
import EventPlannerDashboard from "./EventPlannerDashboard/EventPlannerDashboard"
import UserContext from "./UserContext"
import axios from "axios"


const AdminDashboard = () => {
    const {role} = useContext(UserContext)
    const [organizerUsername, setOrganizerUsername] = useState('')
    const [organizerFistName, setOrganizerFirstName] = useState(null)
    const [organizerLastName, setOrganizerLastName] = useState(null)
    
    const [organizerPicture, setOrganizerPicture] = useState('https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg')
/*     const [artistUsername, setArtistUsername] = useState()
 */
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (role === "Organizer" && token) {
            axios.get('http://localhost:4000/organizers/organizer?timestamp=${Date.now()', {
                headers: {
                    Authorization: `Bearer ${token}`, 
                    'Cache-Control': 'no-cache',
                }
            })
                .then((response) => {
                    setOrganizerUsername(response.data.username)
                    setOrganizerFirstName(response.data.first_name)
                    setOrganizerLastName(response.data.last_name)
                    if (response.data.picture) {
                        setOrganizerPicture(response.data.picture)
                    }
                })
                .catch((error) => {
                    console.error("error al obtener el nombre de usuario", error)
                })
        }
    }, [role, token])

    if (role === "Artist") {
        return <ArtistDashboard/>
    } else if (role === "Organizer"){
        return <EventPlannerDashboard profilePhoto={organizerPicture} username={organizerUsername} fullname={`${organizerFistName} ${organizerLastName}`}/>
    } else {
        return <div>No role assigned</div>
    }
}

export default AdminDashboard
