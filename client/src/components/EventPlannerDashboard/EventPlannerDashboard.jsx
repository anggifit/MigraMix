import { useState } from 'react'
import MenuBar from './MenuBar'
import EditProfile from './EditProfile'
import CreateEventSection from './CreateEventSection'
import MyEventsSection from './MyEventsSection'

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
    <div style={{ display: 'flex' }}>
        <MenuBar 
          onMenuClick= {handlerMenuClick} 
          profilePhoto={profilePhoto}
          username={username}
          fullname={fullname}
        />
        {activeSection === 'editProfile' && <EditProfile /* onUpdateProfilePhoto={handleUpdateProfilePhoto} *//>}
        {activeSection === 'createEvent' && <CreateEventSection/>}
        {activeSection === 'myEvents' && <MyEventsSection/>}
    </div>
  )
}

export default EventPlannerDashboard
