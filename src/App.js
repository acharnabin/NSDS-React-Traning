import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate, useNavigate } from "react-router";
import "./app.css";
import AboutCard from "./component/AboutCardComponent/AboutCard";
import Navbar from "./component/Navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import ProductDetails from "./pages/Productdetails/ProductDetails";
import Profile from "./pages/profile/Profile";
import { checkLogin } from "./ReduxToolkit/user.slice";
import { getFromLocalStorage } from "./utils/storage.utils";

// import TestComponent from "./component/TestComponent";

function PrivateRoute({ children }) {
  const token = getFromLocalStorage("token");

  return token !== null && token !== undefined ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/about2" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        {/* <PrivateRoute path="/profile" element={} /> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
