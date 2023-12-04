const initialState = {
  isAuthenticated: localStorage.getItem('authToken') ? true : false,
  token: localStorage.getItem('authToken') || null,
  refresh: localStorage.getItem('refreshToken') || null,
  username: localStorage.getItem('username') || null,
  client: localStorage.getItem('client') ? true : false,
  company: localStorage.getItem('company') ? true : false,
  manager: localStorage.getItem('manager') ? true : false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('authToken', action.payload.access);
      localStorage.setItem('refreshToken', action.payload.refresh);

      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.access,
        refresh: action.payload.refresh,
      };
    case 'LOGOUT':
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('username');
      localStorage.removeItem('client');
      localStorage.removeItem('company');
      localStorage.removeItem('manager');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        refresh: null,
      };
    case 'UPDATE_AUTH_TOKEN':
      localStorage.setItem('authToken', action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case 'UPDATE_PERMISSIONS':
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('client', action.payload.client);
      localStorage.setItem('company', action.payload.company);
      localStorage.setItem('manager', action.payload.manager);
      return {
        ...state,
        username: action.payload.username,
        client: action.payload.client,
        company: action.payload.company,
        manager: action.payload.manager,
      };
    default:
      return state;
  }
}

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: data,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const updateAuthToken = (token) => {
  return {
    type: 'UPDATE_AUTH_TOKEN',
    payload: token,
  };
};

export const updatePermissions = (permission) => {
  return {
    type: 'UPDATE_PERMISSIONS',
    payload: permission,
  };
};