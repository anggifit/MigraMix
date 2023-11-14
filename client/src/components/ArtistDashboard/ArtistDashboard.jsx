import ArtistForm from "./ArtistForm"
import PropTypes from "prop-types";

const ArtistDashboard = ({artistProfilePic}) => {
  return (
    <div>
      <ArtistForm artistProfilePic={artistProfilePic}/>     
    </div>
  );
}
ArtistDashboard.propTypes = {
  artistProfilePic: PropTypes.func,
};

export default ArtistDashboard; 
