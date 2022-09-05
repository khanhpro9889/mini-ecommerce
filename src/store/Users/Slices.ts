import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type geo = {
  lat: string;
  lng: string;
};

type address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geo;
};

type company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type user = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: company;
};

type usersStoreType = {
  users: user[];
  loading: boolean;
  error: any;
};

const initialCart: usersStoreType = {
  users: [],
  loading: false,
  error: null,
};

export const getAllUsers = createAsyncThunk(
  "usersCart/getAllUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  }
);

export const cartSlice = createSlice({
  name: "usersStore",
  initialState: initialCart,
  reducers: {},
  extraReducers: (builder) => {
    // add your async reducers here
    builder.addCase(getAllUsers.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    });
  },
});

export default cartSlice.reducer;
