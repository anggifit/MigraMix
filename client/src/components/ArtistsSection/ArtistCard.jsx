import { useState } from "react";
import ArtistProfile from "./ArtistProfile";
import PropTypes from "prop-types";

const ArtistCard = ({ image, user, bio, mainLink, musicGenre, performance, typeOfPerformance}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const shortBio = (words) => words.substring(120,-1)

    return (
        <div className="relative flex flex-col lg:flex-row w-full max-w-[50rem] mb-8 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-red-300">
          <div className="relative w-full lg:w-2/5 h-48 lg:h-auto overflow-hidden rounded-xl lg:rounded-l-none bg-white bg-clip-border text-gray-700">
            <img src={image} className="h-full w-full object-cover" alt={user} />
          </div>
          <div className="p-4 lg:p-8 flex flex-col justify-between">
            <div>
              <span className="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-[#FF4B4B]">
                {musicGenre}
              </span>
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                {user}
              </h4>
              <p className="mb-4 block font-sans text-base font-normal leading-relaxed text-gray-700">
                {bio.length > 120 ? shortBio(bio) + '...' : bio}
              </p>
            </div>
            <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  View Profile
                </button>
              <ArtistProfile
                image={image}
                user={user}
                mainLink={mainLink}
                musicGenre={musicGenre}
                performance={performance}
                typeOfPerformance={typeOfPerformance}
                bio={bio}
                open={open}
                onClose={handleClose}
              />
            </div>
          </div>
        </div>
    );
};

ArtistCard.propTypes = {
    image: PropTypes.string.isRequired,
    genre: PropTypes.string,
    user: PropTypes.string.isRequired,
    link: PropTypes.string,
    mainLink: PropTypes.string.isRequired,
    musicGenre: PropTypes.string.isRequired,
    performance: PropTypes.string.isRequired,
    typeOfPerformance: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
};
export default ArtistCard;