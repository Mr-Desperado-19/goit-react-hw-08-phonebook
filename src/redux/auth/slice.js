import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  errorRegistration: null,
  errorLogIn: null,
};

const fulfilledRegOrLogInReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.errorRegistration = null;
  state.errorLogIn = null;
};

const rejectedRegistrationReducer = (state, action) => {
  state.errorRegistration = action.payload;
};
const rejectedLogInReducer = (state, action) => {
  state.errorLogIn = action.payload;
};
const fulfilledLogOutReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const fulfilledRefreshReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const pendingRefreshingReducer = state => {
  state.isRefreshing = true;
};

const rejectedRefreshinfReducer = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, fulfilledRegOrLogInReducer)
      .addCase(register.rejected, rejectedRegistrationReducer)
      .addCase(logIn.fulfilled, fulfilledRegOrLogInReducer)
      .addCase(logIn.rejected, rejectedLogInReducer)
      .addCase(logOut.fulfilled, fulfilledLogOutReducer)
      .addCase(refreshUser.pending, pendingRefreshingReducer)
      .addCase(refreshUser.fulfilled, fulfilledRefreshReducer)
      .addCase(refreshUser.rejected, rejectedRefreshinfReducer);
  },
});
export const authReducer = authSlice.reducer;
