import { useState } from "react";
import ArtistProfile from "./ArtistProfile";
import PropTypes from "prop-types";

const ArtistCard = ({ image, genre, user, bio, email, musicGenre, performance, typeOfPerformance}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="relative flex w-full max-w-[50rem] mb-8 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-red-300">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img src={image} className='h-full w-full object-cover'/>
            </div>
            <div className="p-8">
                <h6 
                    className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-[#FF4B4B] antialiased"
                    style={{ fontFamily: "Audiowide, sans-serif" }}
                >
                    {genre}
                </h6>
                <h4 
                    className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                >
                    {user}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    {bio}
                </p>
                <a className="inline-block">
                    <button 
                        onClick={handleOpen}
                        type="button"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >View Profile
                    </button>
                </a>
                    <ArtistProfile 
                        image={image} 
                        user={user} 
                        email={email} 
                        musicGenre={musicGenre}
                        performance={performance}
                        typeOfPerformance={typeOfPerformance}
                        bio={bio}
                        open={open}
                        onClose={handleClose}
                        />
            </div>
        </div>
    );
};

ArtistCard.propTypes = {
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    musicGenre: PropTypes.string.isRequired,
    performance: PropTypes.string.isRequired,
    typeOfPerformance: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
};
export default ArtistCard;