import { Box, Typography, Modal, Stack, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
    };


function SuccesfullRegistration({ open, onClose }) {
    const navigate = useNavigate()
    const handleNextClick = () => {
        navigate("/api/sign-in")
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <CheckCircleIcon fontSize='large' className='text-lime-500'/>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Succesfull Registration
                        </Typography>
                        <Button
                            variant='contained'
                            size="large"
                            onClick={handleNextClick}
                            sx={{ backgroundColor: '#2B2D42', color: 'white', '&:hover':{backgroundColor: '#9C9FA5'}}}
                        >
                            Next
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export default SuccesfullRegistration
