import { useState } from 'react';
import PropTypes from "prop-types";
import CardFlip from 'react-card-flip';
import FrontSideCard from './FrontSideCard'
import BackSideCard from './BackSideCard'

const EventCard = ({image,title,description,initialDate,finalDate, urlEvent,price, artist }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleFlip}>
        <FrontSideCard 
          image={image}
          title={title}
          price={price}
          artist={artist}
        />
      </div>
      <div onClick={handleFlip}>
        <BackSideCard
          image={image}
          title={title}
          price={price}
          description={description}
          initialDate={initialDate}
          finalDate={finalDate}
          urlEvent={urlEvent}
        />
      </div>
    </CardFlip>
  )
}

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  initialDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string,
  urlEvent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  artist: PropTypes.string
}

export default EventCard
