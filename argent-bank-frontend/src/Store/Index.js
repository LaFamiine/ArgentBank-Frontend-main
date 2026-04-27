import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    user: null,   // { firstName, lastName, email }
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.error = null;
      localStorage.setItem("token", action.payload.token);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, setUser, logout, loginFailure } = authSlice.actions;

export default configureStore({
  reducer: { auth: authSlice.reducer },
});