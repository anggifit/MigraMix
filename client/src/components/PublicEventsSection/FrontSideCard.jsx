import PropTypes from "prop-types";
import { Typography, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";
const FrontSideCard = ({ image,title, price, artist}) => {
  const cardStyle = {
    width: "95%",
    minHeight: "250px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F8F9F9",
  };
const cardMediaStyle = {
    pt: "65%",
    backgroundImage: `url(${image})`,
};
const isFreeStyle = {
  background: "white",
  color: price === "Free" ? "#1BCB39 " : "#FF4B4B",
  padding: "3px 8px",
  borderRadius: "4px",
  position: "absolute",
  top: "10px",
  left: "10px",
};
    return (
      <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="div"
            sx={cardMediaStyle}
            image={image}
            alt={title}
          />
          <div style={isFreeStyle}>
            <span style={{ fontWeight: "bold" }}>
              {price === "Free" ? "Free" : "Paid"}
            </span>
          </div>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="p"
              component="h2"
              style={{ fontSize: "18px" }}
            >
              {title || "Event Title"}
            </Typography>
            {artist && (
              <Typography variant="body2" color="textSecondary" component="p">
                Artist: {artist}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
}
FrontSideCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    initialDate: PropTypes.string,
    finalDate: PropTypes.string,
    urlEvent: PropTypes.string,
    price: PropTypes.string,
    artist:PropTypes.string
};
export default FrontSideCard

