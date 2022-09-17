import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./login-style";
import { UserAccount } from "../../../libs/models/user-account";
import {
  Avatar,
  createTheme,
  CssBaseline,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const theme = createTheme();

export default function SignInSide(props: any) {
  //const theme = React.useMemo(() => ({ color }), [color]);

  const classes = useStyles;

  const [account, setAccount] = useState<UserAccount>({
    username: "",
    password: "",
  });

  const handelAccount = (property: string, event: any) => {
    const accountCopy = { ...account };
    if (property === "username") {
      accountCopy.username = event.target.value;
    } else {
      accountCopy.password = event.target.value;
    }

    setAccount(accountCopy);
  };

  const handelLogin = (event: any) => {
    event.preventDefault();
    if (account && account.username && account.password) {
      console.log("handle request ", account);
    } else {
      //todo: error message
    }
  };

  return (
    <Grid container component="main">
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
        <div>
          <Avatar></Avatar>
          <Typography component="h1" variant="h5">
            כניסה לשופטים
          </Typography>
          <form noValidate>
            <TextField
              onChange={(event) => handelAccount("username", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              onChange={(event) => handelAccount("password", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => handelLogin(e)}
            >
              כניסה
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
