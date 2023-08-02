export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefresh;

export const selectErrorRegistration = state => state.auth.errorRegistration;

export const selectErrorLogIn = state => state.auth.errorLogIn;
