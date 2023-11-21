import { Button } from '@mui/material'; 
import Stack from '@mui/material/Stack';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";

const ButtonLogin = () => {
    const navigate = useNavigate()
    const handleSignInClick = () => {
        navigate("/sign-in")
    }
    const handleSignUpClick = () => {
        navigate("/sign-up")

    }

    return (
      <Stack direction="row" spacing={3} justifyContent="right">
        <Button
          style={{ color: "black", border: "none", textTransform: 'none'}}
          startIcon={<PersonAddAltIcon />}
          disabled={false}
          size="medium"
          variant="outlined"
          onClick={handleSignUpClick}
        >
          Sign up
        </Button>
        <Button
          style={{ color: "black", border: "none", textTransform: 'none'}}
          startIcon={<AccountBoxIcon />}
          disabled={false}
          size="medium"
          variant="outlined"
          onClick={handleSignInClick}
        >
          Sign in
        </Button>
      </Stack>
    );
}

export default ButtonLogin