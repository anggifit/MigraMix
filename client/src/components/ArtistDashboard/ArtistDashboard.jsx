import ArtistForm from "./ArtistForm"

const ArtistDashboard = ({artistProfilePic}) => {
  return (
    <div>
      <ArtistForm artistProfilePic={artistProfilePic}/>     
    </div>
  );
}

export default ArtistDashboard; 
