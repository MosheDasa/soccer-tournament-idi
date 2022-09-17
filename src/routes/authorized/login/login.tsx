import { Button, Stack, TextField } from "@mui/material";
import { useEffect } from "react";
import { useApiAuth } from "../../../libs/services/api-auth";

function Login() {
  const { permissionUser, login } = useApiAuth();

  const handleLogin = () => {
    login("", "");
    window.location.href = "/refereeScreen";
  };

  return (
    <>
      <h1> LOGIN</h1>

      <Stack
        component="form"
        sx={{
          width: "25ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="User" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />

        <Button size="large" onClick={handleLogin} variant="contained">
          התחבר
        </Button>
      </Stack>
    </>
  );
}

export default Login;
