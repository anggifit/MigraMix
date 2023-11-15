import { useState } from 'react'
import MenuBar from './MenuBar'
import EditProfile from './EditProfile'
import CreateEventSection from './CreateEventSection'
import MyEventsSection from './MyEventsSection'
import WelcomeSection from './WelcomeSection'
import PropTypes from "prop-types";


const EventPlannerDashboard = ({username, fullname, profilePhoto }) => {
  const [activeSection, setActiveSection] = useState('')
/*   const [profilePhoto, setProfilePhoto] = useState('https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg');
 */
  const handlerMenuClick = (section) => {
    setActiveSection(section)
  }

  /* const handleUpdateProfilePhoto = (url) => {
    setProfilePhoto(url)
  } */

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <MenuBar 
          onMenuClick= {handlerMenuClick} 
          profilePhoto={profilePhoto}
          username={username}
          fullname={fullname}
        />

        {activeSection !== 'editProfile' 
          && activeSection !== 'createEvent' 
          && activeSection !== 'myEvents' 
          && <WelcomeSection />
        }
      
        {activeSection === 'editProfile' && <EditProfile /* onUpdateProfilePhoto={handleUpdateProfilePhoto} *//>}
        {activeSection === 'createEvent' && <CreateEventSection/>}
        {activeSection === 'myEvents' && <MyEventsSection/>}
    </div>
  )
}

EventPlannerDashboard.propTypes = {
  username: PropTypes.string,
  fullname: PropTypes.string,
  profilePhoto: PropTypes.string
}

export default EventPlannerDashboard
