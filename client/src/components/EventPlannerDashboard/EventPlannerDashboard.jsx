import MenuBar from './MenuBar'
import EditProfile from './EditProfile'
import CreateEventSection from './CreateEventSection'

const EventPlannerDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
        <MenuBar/>
        {/* <EditProfile/> */}
        <CreateEventSection/>
    </div>
  )
}

export default EventPlannerDashboard
