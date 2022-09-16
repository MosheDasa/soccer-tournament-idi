import { Button, Stack, TextField } from "@mui/material";
import { useEffect } from "react";

function Login() {
  return (
    <>
      <h1> Login</h1>

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

        <Button size="large" variant="contained">
          התחבר
        </Button>
      </Stack>
    </>
  );
}

export default Login;
