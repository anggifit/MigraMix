import { useState } from 'react'
import MenuBar from './MenuBar'
import EditProfile from './EditProfile'
import CreateEventSection from './CreateEventSection'
import MyEventsSection from './MyEventsSection'

const EventPlannerDashboard = () => {
  const [activeSection, setActiveSection] = useState('')

  const handlerMenuClick = (section) => {
    setActiveSection(section)
  }

  return (
    <div style={{ display: 'flex' }}>
        <MenuBar onMenuClick= {handlerMenuClick}/>
        {activeSection === 'editProfile' && <EditProfile/>}
        {activeSection === 'createEvent' && <CreateEventSection/>}
        {activeSection === 'myEvents' && <MyEventsSection/>}
    </div>
  )
}

export default EventPlannerDashboard
