import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { UserAccountReq } from "../../../libs/models/user-account";
import {
  Alert,
  Avatar,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useApiAuth } from "../../../libs/services/api-auth";
import { PermissionType } from "../../../libs/models/permission";
import { ErrorMessageType } from "../../../libs/models/generta";

export default function SignInSide(props: any) {
  const { login, isLogin } = useApiAuth();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const login = isLogin([PermissionType.admin, PermissionType.referee]);

    if (login) {
      window.location.href = "/refereeScreen";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [userAccountReq, setUserAccountReq] = useState<UserAccountReq>({
    password: "",
    permission: PermissionType.user,
    userName: "",
  });

  const handelAccount = (property: string, event: any) => {
    const userAccountReqCopy = { ...userAccountReq };
    setErrorMessageByErrorType(ErrorMessageType.None);

    if (property === "username") {
      userAccountReqCopy.userName = event.target.value;
    } else {
      userAccountReqCopy.password = event.target.value;
    }

    setUserAccountReq(userAccountReqCopy);
  };

  const handelLogin = (event: any) => {
    event.preventDefault();
    setErrorMessageByErrorType(ErrorMessageType.None);
    if (userAccountReq && userAccountReq.userName && userAccountReq.password) {
      login(userAccountReq).then((replay: ErrorMessageType) => {
        setErrorMessageByErrorType(replay);
      });
    } else {
      setErrorMessageByErrorType(ErrorMessageType.RequiredFields);
    }
  };

  const setErrorMessageByErrorType = (errorType: ErrorMessageType) => {
    let errorMessage = "";

    switch (errorType) {
      case ErrorMessageType.GeneralError:
        errorMessage = "שגיאה כללית";
        break;
      case ErrorMessageType.Invalid:
        errorMessage = "היוזר או הסיסמא לא תקינים";
        break;
      case ErrorMessageType.RequiredFields:
        errorMessage = "יש למלא את כל השדות";
        break;
      case ErrorMessageType.None:
      default:
        errorMessage = "";
        break;
    }
    setErrorMessage(errorMessage);
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
              error={errorMessage ? true : false}
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
              error={errorMessage ? true : false}
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
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
