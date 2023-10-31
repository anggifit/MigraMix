import PropTypes from 'prop-types'
import MenuBar from './MenuBar'
import ProfileSection from './ProfileSection'

const EventPlannerDashboard = (props) => {
  return (
    <div style={{ display: 'flex' }}>
        <MenuBar/>
        <ProfileSection/>
    </div>
  )
}

EventPlannerDashboard.propTypes = {

}

export default EventPlannerDashboard
