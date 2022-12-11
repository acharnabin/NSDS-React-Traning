import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Login_User } from "../../ReduxToolkit/user.slice";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { Login_User_status, isLoggedIn } = useSelector((s) => s.user);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const resetError = () => {
    setError({
      email: "",
      password: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    resetError();

    if (input?.email?.length === 0) {
      setError({
        ...error,
        email: "Please enter email address",
      });

      return;
    }

    if (input?.password?.length === 0) {
      setError({
        ...error,
        password: "Please enter password",
      });

      return;
    }

    // login api call
    dispatch(Login_User(input));

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

            <form onSubmit={handleFormSubmit} className="p-2">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={input?.email}
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  onChange={handleOnChange}
                />
                <small id="emailHelp" class="form-text text-danger">
                  {error?.email}
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  value={input?.password}
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handleOnChange}
                />
                <small id="emailHelp" class="form-text text-danger">
                  {error?.password}
                </small>
              </div>

              <button
                disabled={Login_User_status === "loading"}
                type="submit"
                class="btn btn-primary"
              >
                {Login_User_status === "loading" ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
