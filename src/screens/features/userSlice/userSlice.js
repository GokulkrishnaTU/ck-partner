import { createSlice } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';

const initialState = {
  user: [],
  menuOpen: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    toggleMenu: (state, action) => {
      state.menuOpen = action.payload ? action.payload : !state.menuOpen;
    },
  },
});

export const { setUser, toggleMenu } = userSlice.actions;

export default userSlice.reducer;
