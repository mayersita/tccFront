/*
 * Action Types
 */
export const Types = {
  CREATE_TEAM_REQUEST: 'CREATE_TEAM_REQUEST',
  CREATE_TEAM_SUCCESS: 'CREATE_TEAM_SUCCESS',
  CREATE_TEAM_FAILURE: 'CREATE_TEAM_FAILURE',

  JOIN_TEAM_REQUEST: 'JOIN_TEAM_REQUEST',
  JOIN_TEAM_SUCCESS: 'JOIN_TEAM_SUCCESS',
  JOIN_TEAM_FAILURE: 'JOIN_TEAM_FAILURE',

  REQUEST_TEAM_BYUSER: 'REQUEST_TEAM_BYUSER',
  REQUEST_TEAM_BYUSER_SUCCESS: 'REQUEST_TEAM_BYUSER_SUCCESS',
  REQUEST_TEAM_BYUSER_FAILURE: 'REQUEST_TEAM_BYUSER_FAILURE',

  TEAM_CLEAR_STATUS: 'TEAM_CLEAR_STATUS',
};

/*
 * Reducer
 */
const INITIAL_STATE = {
  userId: null,
  data: null,
  name: null,
  code: null,
  loading: false,
  success: false,
  successCreation: false,
  successJoin: false,
  error: false,
  errorCreation: false,
  errorJoin: false,
};

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_TEAM_REQUEST:
      return {
        ...state,
        name: action.payload.name,
        code: action.payload.code,
        successCreation: false,
        loading: true,
        errorCreation: false,
      };
    case Types.CREATE_TEAM_SUCCESS:
      return {
        ...state,
        successCreation: true,
        loading: false,
        errorCreation: false,
      };
    case Types.CREATE_TEAM_FAILURE:
      return {
        ...state,
        errorCreation: true,
        loading: false,
        successCreation: false,
      };

    case Types.JOIN_TEAM_REQUEST:
      return {
        ...state,
        code: action.payload.code,
        errorJoin: false,
        successJoin: false,
        loading: true,
      };
    case Types.JOIN_TEAM_SUCCESS:
      return {
        ...state,
        successJoin: true,
        loading: false,
        errorJoin: false,
      };
    case Types.JOIN_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        successJoin: false,
        errorJoin: true,
      };

    case Types.REQUEST_TEAM_BYUSER:
      return {
        ...state,
        userId: action.payload.userId,
        success: false,
        loading: true,
        error: false,
      };
    case Types.REQUEST_TEAM_BYUSER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        success: true,
        loading: false,
        error: false,
      };
    case Types.REQUEST_TEAM_BYUSER_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };
    case Types.TEAM_CLEAR_STATUS:
      return {
        ...state,
        loading: false,
        success: false,
        successCreation: false,
        successJoin: false,
        error: false,
        errorCreation: false,
        errorJoin: false,
      };
    default:
      return state;
  }
}

/*
 * Actions Creators
 */

export const Creators = {
  createTeamRequest: (name, code) => ({
    type: Types.CREATE_TEAM_REQUEST,
    payload: { name, code },
  }),

  createTeamSuccess: () => ({
    type: Types.CREATE_TEAM_SUCCESS,
  }),

  createTeamFailure: () => ({
    type: Types.CREATE_TEAM_FAILURE,
  }),

  joinTeamRequest: (code) => ({
    type: Types.JOIN_TEAM_REQUEST,
    payload: { code },
  }),

  joinTeamSuccess: () => ({
    type: Types.JOIN_TEAM_SUCCESS,
  }),

  joinTeamFailure: () => ({
    type: Types.JOIN_TEAM_FAILURE,
  }),

  teamByUserRequest: (userId) => ({
    type: Types.REQUEST_TEAM_BYUSER,
    payload: { userId },
  }),

  teamByUserSuccess: (data) => ({
    type: Types.REQUEST_TEAM_BYUSER_SUCCESS,
    payload: { data },
  }),

  teamByUserFailure: () => ({
    type: Types.REQUEST_TEAM_BYUSER_FAILURE,
  }),

  clearStatusTeam: () => ({
    type: Types.TEAM_CLEAR_STATUS,
  }),
};
