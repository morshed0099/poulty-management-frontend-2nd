import { createSlice } from "@reduxjs/toolkit";

type TauthState = {
  user: null | object;
  token: null | string;
};

const initialState: TauthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, toke } = action.payload;
      state.user = user;
      state.token = toke;
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
