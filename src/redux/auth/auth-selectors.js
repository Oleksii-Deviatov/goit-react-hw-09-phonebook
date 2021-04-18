const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getError = state => state.auth.error;

const getStatusLoadingUser = state => state.auth.isLoadingUser;

export { getIsAuthenticated, getUsername, getError, getStatusLoadingUser };
