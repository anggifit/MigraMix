import PropTypes from "prop-types";
import { Typography, Button, Card, CardActionArea, CardMedia, CardContent, CardActions, Stack, Chip} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import moment from "moment";

const formatDate = (date) => {
    return moment(date).format("MMM Do YY");
};

const BackSideCard = ({ image,title,description,initialDate,finalDate,urlEvent,price }) => {
    const cardStyle = {
        width: '100%',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
    };
    
    const cardMediaStyle = {
        pt: "56.25%",
        backgroundImage: `url(${image})`,
    };
    
    return (
        <Card 
                sx={cardStyle}>
            <CardActionArea>
                <CardMedia
                component="div"
                sx={cardMediaStyle}
                image={image}
                alt={title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title || "Event Title"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description || "Event Description"}
                    <p className="text-bue-900 mb-4">
                    <span className="font-semibold">
                        Date: from {formatDate(initialDate) || "N/A"} to{" "}
                        {formatDate(finalDate) || "N/A"}
                    </span>
                    </p>
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Stack spacing={12} direction="row" justifyContent="space-between">
                <Button size="small" color="primary" target="_blank" rel="noopener" href={urlEvent || "#"} >
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

    )
}

BackSideCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    initialDate: PropTypes.string.isRequired,
    finalDate: PropTypes.string.isRequired,
    urlEvent: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default BackSideCard
