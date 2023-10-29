import { Button } from '@mui/material'; 
import Stack from '@mui/material/Stack';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";
import BotonProvisorio from './BotonProvisorio';
import BotonProvisorio2 from './BotonProvisorio2';

const ButtonLogin = () => {
    const navigate = useNavigate()
    const handleSignInClick = () => {
        navigate("/sign-in")
    }
    const handleSignUpClick = () => {
        navigate("/api/sign-up")
    }

    return (
      <Stack direction="row" spacing={3} justifyContent="right">
        <Button
          style={{ backgroundColor: "#2D3142", color: "white", border: "none"}}
          startIcon={<PersonAddAltIcon />}
          disabled={false}
          size="large"
          variant="outlined"
          onClick={handleSignUpClick}
        >
          Sign up
        </Button>
        <Button
          style={{ backgroundColor: "#2D3142", color: "white", border: "none" }}
          startIcon={<AccountBoxIcon />}
          disabled={false}
          size="large"
          variant="outlined"
          onClick={handleSignInClick}
        >
          Sign in
        </Button>
        <BotonProvisorio/>
        <BotonProvisorio2/>
      </Stack>
    );
}

export default ButtonLogin