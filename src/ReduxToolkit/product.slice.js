import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProductData = createAsyncThunk(
  "GetProductData",
  async (data) => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      return res?.data;
    } catch (error) {
      console.log(error, "error in GetProductData");
    }
  }
);

export const GetProductData2 = createAsyncThunk(
  "GetProductData2",
  async (data) => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      return res?.data;
    } catch (error) {
      console.log(error, "error in GetProductData");
    }
  }
);

const initialState = {
  data: [],
  dataCopy: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  //name should be unique
  name: "productSlice",

  initialState,

  reducers: {
    filterByPrice: (state, { payload }) => {
      //filter by price

      let filterData = state.dataCopy?.filter((item) => item.price < payload);
      state.data = filterData;
    },
    searchByName: (state, { payload }) => {
      //filter by price

      let filterData = state.dataCopy?.filter(
        (item) => item.title?.toLowerCase() === payload?.toLowerCase()
      );
      state.data = filterData;
    },
  },

  // api call
  extraReducers: {
    // get product data
    [GetProductData.pending]: (state, { payload }) => {
      state.status = "loading";
      console.log("this is pending....");
    },
    [GetProductData.fulfilled]: (state, { payload }) => {
      state.status = "idle";
      state.data = payload;
      state.dataCopy = payload;
    },
    [GetProductData.rejected]: (state, { payload }) => {
      state.status = "idle";
      state.error = "something went wrong";
      console.log("this is error....");
    },
  },
});

export const { filterByPrice, searchByName } = productSlice.actions;

export default productSlice.reducer;
