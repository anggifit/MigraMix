import { useState } from 'react'
import { Box, Button, Typography, Modal, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


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


function SuccesfullRegistration({ open, handleClose }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
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
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export default SuccesfullRegistration
