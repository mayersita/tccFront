/*
 * Action Types
 */
export const Types = {
  AUTH_REQUEST: 'AUTH_REQUEST',
  AUTH_REQUEST_SUCCESS: 'AUTH_REQUEST_SUCCESS',
  AUTH_REQUEST_FAILURE: 'AUTH_REQUEST_FAILURE',
  AUTH_SAVE_TOKEN: 'AUTH_SAVE_TOKEN',

  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_REQUEST_SUCCESS: 'SIGNUP_REQUEST_SUCCESS',
  SIGNUP_REQUEST_FAILURE: 'SIGNUP_REQUEST_FAILURE',

  LOGOUT: 'LOGOUT',
  USER_SIGNED: 'USER_SIGNED',

  CLEAR_STATUS: 'CLEAR_STATUS',
};

/*
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  name: null,
  email: null,
  role: null,
  password: null,
  signed: false,
  token: null,
  loading: false,
  success: false,
  error: false,
  loadingSignUp: false,
  successSignUp: false,
  errorSignUp: false,
  errorMessage: '',
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH_REQUEST:
      return {
        ...state,
        password: action.payload.password,
        email: action.payload.email,
        success: false,
        loading: true,
        signed: false,
        error: false,
        errorMessage: null,
      };
    case Types.AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        data: action.payload.data,
        success: true,
        loading: false,
        error: false,
        signed: true,
      };
    case Types.AUTH_SAVE_TOKEN:
      return {
        ...state,
        error: false,
        success: true,
        errorMessage: null,
        token: action.payload.token,
      };
    case Types.AUTH_REQUEST_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        name: null,
        email: null,
        password: null,
        signed: false,
        token: null,
        success: false,
        errorMessage: action.payload.errorMessage,
      };

    case Types.SIGNUP_REQUEST:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        password: action.payload.password,
        errorSignUp: false,
        errorMessage: null,
        successSignUp: false,
        loadingSignUp: true,
      };
    case Types.SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        data: action.payload.data,
        successSignUp: true,
        loadingSignUp: false,
        errorSignUp: false,
        errorMessage: null,
        signed: true,
      };
    case Types.SIGNUP_REQUEST_FAILURE:
      return {
        ...state,
        name: null,
        email: null,
        password: null,
        token: null,
        signed: false,
        successSignUp: false,
        loadingSignUp: false,
        errorSignUp: true,
        errorMessage: action.payload.errorMessage,
      };
    case Types.LOGOUT:
      return {
        ...state,
        data: [],
        name: null,
        email: null,
        role: null,
        password: null,
        signed: false,
        token: null,
        loading: false,
        success: false,
        error: false,
        successSignUp: false,
        loadingSignUp: false,
        errorSignUp: false,
      };

    case Types.USER_SIGNED:
      return {
        ...state,
        success: true,
        signed: true,
        error: false,
        errorMessage: null,
      };
    case Types.CLEAR_STATUS:
      return {
        ...state,
        data: [],
        name: null,
        email: null,
        role: null,
        password: null,
        signed: false,
        token: null,
        loading: false,
        success: false,
        error: false,
        loadingSignUp: false,
        successSignUp: false,
        errorSignUp: false,
        errorMessage: '',
      };
    default:
      return state;
  }
}

/*
 * Actions Creators
 */

export const Creators = {
  authRequest: (email, password) => ({
    type: Types.AUTH_REQUEST,
    payload: { email, password },
  }),

  authSuccess: (token, data) => ({
    type: Types.AUTH_REQUEST_SUCCESS,
    payload: { token, data },
  }),

  saveToken: (token) => ({
    type: Types.AUTH_SAVE_TOKEN,
    payload: { token },
  }),

  authFailure: (errorMessage) => ({
    type: Types.AUTH_REQUEST_FAILURE,
    payload: { errorMessage },
  }),

  signUpRequest: (name, email, role, password) => ({
    type: Types.SIGNUP_REQUEST,
    payload: { name, email, role, password },
  }),

  signUpSuccess: (token, data) => ({
    type: Types.SIGNUP_REQUEST_SUCCESS,
    payload: { token, data },
  }),

  signUpFailure: (errorMessage) => ({
    type: Types.SIGNUP_REQUEST_FAILURE,
    payload: { errorMessage },
  }),

  logout: () => ({
    type: Types.LOGOUT,
  }),

  userSigned: () => ({
    type: Types.USER_SIGNED,
  }),

  clearStatus: () => ({
    type: Types.CLEAR_STATUS,
  }),
};
