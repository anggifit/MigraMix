import { useState } from 'react';
import PropTypes from "prop-types";
import CardFlip from 'react-card-flip';
import FrontSideCard from './FrontSideCard'
import BackSideCard from './BackSideCard'

const PublicEventCard = ({image,title,description,initialDate,finalDate, urlEvent,price,}) => {
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

PublicEventCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  initialDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string.isRequired,
  urlEvent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default PublicEventCard
