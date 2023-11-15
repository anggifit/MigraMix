import PropTypes from "prop-types";
import {
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
  Chip,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import moment from "moment";

const BackSideCard = ({
  image,
  title,
  description,
  initialDate,
  finalDate,
  urlEvent,
  price,
}) => {
  const formatDate = (date) => {
    return date ? moment(date).format("MM Do YYYY") : "N/A"; // little check before proceed with the fecha 😁
  };
  const cardStyle = {
    width: "100%",
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
  };

  const cardMediaStyle = {
    pt: "56.25%",
    backgroundImage: `url(${image})`,
  };

  return (
    <div>
      <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="div"
            sx={cardMediaStyle}
            image={image}
            alt={title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5">
              {title || "Event Title"}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description || "Event Description"}
            </Typography>
            <Typography variant="subtitle2">
              Date: {initialDate ? `from ${formatDate(initialDate)}` : "N/A"}{" "}
              {finalDate ? `to ${formatDate(finalDate)}` : " "}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Stack spacing={12} direction="row" justifyContent="space-between">
            <Button
              size="small"
              color="primary"
              target="_blank"
              rel="noopener"
              href={urlEvent || "#"}
            >
              Link to event
            </Button>
            <Chip
              icon={<MonetizationOnIcon />}
              label={price || "N/A"}
              color={price === "Free" ? "success" : "primary"}
            />
          </Stack>
        </CardActions>
      </Card>
    </div>
  );
};

BackSideCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  initialDate: PropTypes.string,
  finalDate: PropTypes.string,
  urlEvent: PropTypes.string,
  price: PropTypes.string,
};

export default BackSideCard;
