
const ArtistCard = ({ image, genre, user, bio, link }) => {
    return (
        <div className="relative flex w-full max-w-[50rem] mb-8 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img 
                    src={image}
                    className='h-full w-full object-cover'
                />
            </div>
            <div className="p-8">
                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {genre}
                </h6>
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {user}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    {bio}
                </p>
                <a className="inline-block" href={link}>
                    <button 
                        type="button" 
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >View Profile
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ArtistCard;