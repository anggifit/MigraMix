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
        navigate("/api/sign-in")
    }
    const handleSignUpClick = () => {
        navigate("/api/sign-up")
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
          className="bg-gradient-to-r from-red-200 via-red-300 to-red-400 hover:from-red-500 hover:via-red-600 hover:to-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80"
          startIcon={<AccountBoxIcon />}
          disabled={false}
          size="medium"
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