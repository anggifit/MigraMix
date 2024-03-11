import { Box, Button, Typography, Modal, Stack, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "600px",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

const ArtistProfile = ({
  open,
  onClose,
  image,
  user,
  musicGenre,
  performance,
  typeOfPerformance,
  bio,
  mainLink,
}) => {
  
  const protocol = "https://";

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-gradient-to-t from-red-300 to-neutral-50">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <div className="container mx-auto my-10">
              <div>
                <div className="flex justify-center">
                  <img
                    src={image}
                    className="rounded-full mx-auto absolute -top-20 w-32 h-32 lg:w-40 lg:h-40 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    alt={user}
                  />
                </div>
                <div className="mt-6 text-[#FF4B4B]">
                  <Typography
                    id="modal-modal-title"
                    variant="h2"
                    align="center"
                    sx={{ fontFamily: "Audiowide, sans-serif" }}
                  >
                    {user}
                  </Typography>
                  <div className="mt-5 px-2">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Music Genre</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{musicGenre}</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Performance</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{performance}</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Type of Performance</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{typeOfPerformance}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <div className="mt-8 py-6 border-t border-slate-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-2/3 px-4">
                        <p className="mb-4 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                          {bio}
                        </p>
                        <Button
                          variant="contained"
                          onClick={() => {
                            if (mainLink.startsWith("http")) {
                              window.location.href = mainLink;
                            } else {
                              window.location.href = protocol + mainLink;
                            }
                          }}
                          fullWidth={true}
                          sx={{
                            backgroundColor: "#2B2D42",
                            color: "white",
                            "&:hover": { backgroundColor: "#9C9FA5" },
                          }}
                        >
                          Contact me
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

ArtistProfile.propTypes = {
  image: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  mainLink: PropTypes.string.isRequired,
  musicGenre: PropTypes.string.isRequired,
  performance: PropTypes.string.isRequired,
  typeOfPerformance: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default ArtistProfile;
