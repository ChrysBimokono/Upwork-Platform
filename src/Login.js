import { PrimaryButton } from "./StyledComponents";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { LoginInput } from "./StyledComponents";

export default function Login({ setLoggedIn }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",

        display: "flex",

        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "400px",
          height: "300px",
          p: "40px",
          boxSizing: "border-box"
        }}
      >
        <Typography
          sx={{ color: "darkgrey" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Log In
        </Typography>
        <FormControl sx={{ width: "80%" }}>
          <LoginInput
            id="input-with-icon-adornment"
            placeholder="Username or Email"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />

          <LoginInput id="password" placeholder="Password" />
          <PrimaryButton
            sx={{ margin: "20px 0" }}
            variant="contained"
            onClick={() => setLoggedIn(true)}
          >
            continue with Email
          </PrimaryButton>
        </FormControl>
      </Box>
    </Box>
  );
}
