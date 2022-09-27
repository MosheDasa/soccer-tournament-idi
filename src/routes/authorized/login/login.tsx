import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { UserAccount, UserAccountReq } from "../../../libs/models/user-account";
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
import { ResponseData } from "../../../libs/models/generta";

export default function UserLogin() {
  const { login, isLogin } = useApiAuth();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const login = isLogin([PermissionType.admin, PermissionType.referee]);

    if (login) {
      window.location.href = "/refereeScreen";
    }
  }, []);

  const [userAccountReq, setUserAccountReq] = useState<UserAccountReq>({
    password: "",
    userName: "",
  });

  const handelAccount = (property: string, event: any) => {
    const userAccountReqCopy = { ...userAccountReq };
    setErrorMessageByErrorType(0);

    if (property === "username") {
      userAccountReqCopy.userName = event.target.value;
    } else {
      userAccountReqCopy.password = event.target.value;
    }

    setUserAccountReq(userAccountReqCopy);
  };

  const handelLogin = (event: any) => {
    event.preventDefault();
    setErrorMessageByErrorType(0);
    if (userAccountReq && userAccountReq.userName && userAccountReq.password) {
      login(userAccountReq).then((replay: ResponseData<UserAccount>) => {
        if (!replay || !replay.isSuccess) {
          setErrorMessageByErrorType(replay.errorCode);
        }
      });
    } else {
      setErrorMessageByErrorType(70);
    }
  };

  const setErrorMessageByErrorType = (ErrorCode: number) => {
    let errorMessage = "";

    switch (ErrorCode) {
      case 0:
        errorMessage = "";
        break;
      case 80:
        errorMessage = "היוזר או הסיסמא לא תקינים";
        break;
      case 70:
        errorMessage = "יש למלא את כל השדות";
        break;
      case 99:
      default:
        errorMessage = "שגיאה כללית";
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
