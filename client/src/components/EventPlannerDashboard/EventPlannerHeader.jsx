import PropTypes from 'prop-types'

const EventPlannerHeader = ({fullname, profilePhoto, username}) => {
  return (
    <div className="text-center">
        <img
            src={profilePhoto}
            alt="Avatar user"
            className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto"
            style={{
              maxWidth: '250px',
            }}
        />
        <h2 className="font-bold text-2xl text-center text-gray-700 pt-4 hidden sm:block">
            {fullname}
        </h2>
        <h3 className="font-bold text-base text-center text-gray-700 pt-4">{username}</h3>
    </div>
  )
}

EventPlannerHeader.propTypes = {
  fullname: PropTypes.string,
  profilePhoto: PropTypes.string,
  username: PropTypes.string,
}

export default EventPlannerHeader
