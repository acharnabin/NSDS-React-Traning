import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Logout } from "../../ReduxToolkit/user.slice";
import "./navbar.css";

const LinkComponent = ({ name, to }) => {
  return (
    <li className="link">
      <Link to={to}>{name}</Link>
    </li>
  );
};

const Navbar = () => {
  const { cartItems, count } = useSelector((store) => store.cart_slice);
  const { userData, isLoggedIn } = useSelector((s) => s.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(Logout());
    navigate("/login");
    toast.success("Log out")
  };

  return (
    <div className="shadow-sm bg-white mb-2">
      <div className="container">
        <nav className="navbar">
          <div className="navbar_left">
            <h5>Ecommarce Clone</h5>
          </div>

          <h1 className="text-primary">Cart({cartItems?.length})</h1>

          <div className="navbar_right">
            <ul className="navbar_right_ul">
              <LinkComponent to="/" name={"Home"} />
              <LinkComponent to="/about" name="About" />
              <LinkComponent to="/jobs" name="Jobs" />
              <LinkComponent to="/" name="My network" />
              {isLoggedIn ? (
                <Button onClick={logout}>{userData?.email}</Button>
              ) : null}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
