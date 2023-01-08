import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../axios/axiosInstance";
import { endpoint } from "../axios/endpoint";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveInLocalStorage,
} from "../utils/storage.utils";

export const Login_User = createAsyncThunk("/api/login", async (data) => {
  try {
    const res = await axiosInstance.post(endpoint.login, data);
    return res?.data;
  } catch (error) {
    console.log("error in login**", error);
  }
});

export const Signup_User = createAsyncThunk("/api/signup", async (data) => {
  try {
    const res = await axiosInstance.post(endpoint.signup, data);
    return res?.data;
  } catch (error) {
    console.log("error in signup**", error);
  }
});

const initialState = {
  isLoggedIn: false,
  Login_User_status: "idle",
  signup_User_status: "idle",
  userData: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    checkLogin: (state) => {
      let token = getFromLocalStorage("token");
      let userData = getFromLocalStorage("userData");

      if (token?.length > 0 && token !== null) {
        state.isLoggedIn = true;

        if (userData !== null && userData?.length > 0) {
          state.userData = JSON.parse(userData);
        }
      }
    },
    Logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      removeFromLocalStorage("token");
      removeFromLocalStorage("userData");
    },
  },
  extraReducers: {
    // FOR login
    [Login_User.pending]: (state) => {
      state.Login_User_status = "loading";
    },
    [Login_User.fulfilled]: (state, { payload }) => {
      state.Login_User_status = "idle";

      if (payload?.status === 200) {
        toast.success("Login sucessfull");
        state.userData = payload?.data;
        saveInLocalStorage("userData", JSON.stringify(payload?.data));
        saveInLocalStorage("token", payload?.token);
        state.isLoggedIn = true;
      } else {
        toast.error("Something went wrong");
      }
    },
    [Login_User.rejected]: (state) => {
      toast.error("Something went wrong");
      state.Login_User_status = "idle";
    },

    //for sign up
    [Signup_User.pending]: (state) => {
      state.signup_User_status = "loading";
    },
    [Signup_User.fulfilled]: (state, { payload }) => {
      state.signup_User_status = "idle";

      if (payload?.status === 200) {
        toast.success("sign up sucessfull");
        state.userData = payload?.data;
        saveInLocalStorage("userData", JSON.stringify(payload?.data));
        saveInLocalStorage("token", payload?.token);
        state.isLoggedIn = true;
      } else {
        toast.error("Something went wrong");
      }
    },
    [Signup_User.rejected]: (state) => {
      toast.error("Something went wrong");
      state.signup_User_status = "idle";
    },
  },
});

export const { checkLogin, Logout } = userSlice.actions;

export default userSlice.reducer;
