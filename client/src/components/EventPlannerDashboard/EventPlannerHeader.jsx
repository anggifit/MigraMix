import PropTypes from 'prop-types'

const EventPlannerHeader = ({user, profilePhoto}) => {
  return (
    <div>
        <img
            src={profilePhoto}
            alt="Avatar user"
            className="w-20 md:w-32 rounded-full mx-auto"
        />
        <h2 className="font-bold text-base text-center text-gray-700 pt-4">
            {user}
        </h2>
    </div>
  )
}

EventPlannerHeader.propTypes = {

}

export default EventPlannerHeader
