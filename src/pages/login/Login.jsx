import {
  Button,
  CircularProgress,
  DialogContent,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Login_User, Signup_User } from "../../ReduxToolkit/user.slice";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";

const Login = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setSignupModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: signupRegister,
    handleSubmit: signUpHandleSubmit,
    formState: { errors: signUpError },
  } = useForm();

  const dispatch = useDispatch();
  const { Login_User_status, signup_User_status, isLoggedIn } = useSelector(
    (s) => s.user
  );
  const navigate = useNavigate();
  const [show, setshow] = useState(false);

  const handleFormSubmit = (data) => {
    console.log("data", data);

    // login api call
    dispatch(Login_User(data));

    //
  };

  const handleFormSubmitForSignUp = (data) => {
    console.log("data", data);

    // login api call
    dispatch(Signup_User(data));

    //
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card p-3">
            <h1>Login</h1>

            <Button
              variant="contained"
              color="success"
              onClick={() => setOpenLoginModal(true)}
            >
              Login{" "}
            </Button>
            <Button
              onClick={() => setSignupModal(true)}
              variant="contained"
              color="primary"
            >
              Sign up{" "}
            </Button>

            <Dialog
              onClose={() => setOpenLoginModal(false)}
              open={openLoginModal}
              maxWidth="md"
              fullWidth
            >
              <DialogContent>
                <Typography>Login</Typography>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <Stack direction="column" spacing={2}>
                    <TextField
                      variant="outlined"
                      label="Enter email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please enter email address",
                        },
                      })}
                      error={Boolean(errors?.email)}
                      helperText={errors?.email?.message}
                    />
                    <TextField
                      type={show ? "text" : "password"}
                      variant="outlined"
                      label="Enter password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Please enter password",
                        },
                      })}
                      error={Boolean(errors?.password)}
                      helperText={errors?.password?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <Button onClick={() => setshow(!show)}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      disabled={Login_User_status === "loading"}
                      type="submit"
                      variant="outlined"
                    >
                      {Login_User_status === "loading" ? (
                        <CircularProgress size={24} color="secondary" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Stack>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog
              onClose={() => setSignupModal(false)}
              open={openSignupModal}
              maxWidth="md"
              fullWidth
            >
              <DialogContent>
                <Typography>sign up</Typography>
                <form onSubmit={signUpHandleSubmit(handleFormSubmitForSignUp)}>
                  <Stack direction="column" spacing={2}>
                    <TextField
                      variant="outlined"
                      label="Enter email"
                      {...signupRegister("email", {
                        required: {
                          value: true,
                          message: "Please enter email address",
                        },
                      })}
                      error={Boolean(signUpError?.email)}
                      helperText={signUpError?.email?.message}
                    />
                    <TextField
                      variant="outlined"
                      label="Enter password"
                      {...signupRegister("password", {
                        required: {
                          value: true,
                          message: "Please enter password",
                        },
                      })}
                      error={Boolean(signUpError?.password)}
                      helperText={signUpError?.password?.message}
                    />
                    <TextField
                      variant="outlined"
                      label="Enter fullname"
                      {...signupRegister("fullName", {
                        required: {
                          value: true,
                          message: "Please enter fullName",
                        },
                      })}
                      error={Boolean(signUpError?.fullName)}
                      helperText={signUpError?.fullName?.message}
                    />
                    <TextField
                      variant="outlined"
                      label="Enter username"
                      {...signupRegister("username", {
                        required: {
                          value: true,
                          message: "Please enter username",
                        },
                      })}
                      error={Boolean(signUpError?.username)}
                      helperText={signUpError?.username?.message}
                    />
                    <TextField
                      variant="outlined"
                      label="Enter phone"
                      {...signupRegister("phone", {
                        required: {
                          value: true,
                          message: "Please enter phone",
                        },
                      })}
                      error={Boolean(signUpError?.phone)}
                      helperText={signUpError?.phone?.message}
                    />
                    <TextField
                      variant="outlined"
                      label="Enter bio"
                      {...signupRegister("bio", {
                        required: {
                          value: true,
                          message: "Please enter bio",
                        },
                      })}
                      error={Boolean(signUpError?.bio)}
                      helperText={signUpError?.bio?.message}
                    />
                    <Button
                      disabled={signup_User_status === "loading"}
                      type="submit"
                      variant="outlined"
                    >
                      {signup_User_status === "loading" ? (
                        <CircularProgress size={24} color="secondary" />
                      ) : (
                        "SIGN UP"
                      )}
                    </Button>
                  </Stack>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
