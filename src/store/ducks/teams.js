/*
 * Action Types
 */
export const Types = {
  CREATE_TEAM_REQUEST: 'CREATE_TEAM_REQUEST',
  CREATE_TEAM_SUCCESS: 'CREATE_TEAM_SUCCESS',
  CREATE_TEAM_FAILURE: 'CREATE_TEAM_FAILURE',

  JOIN_TEAM_REQUEST: 'JOIN_TEAM_REQUEST',
  JOIN_TEAM_REQUEST_SUCCESS: 'JOIN_TEAM_REQUEST_SUCCESS',
  JOIN_TEAM_REQUEST_FAILURE: 'JOIN_TEAM_REQUEST_FAILURE',
};

/*
 * Reducer
 */
const INITIAL_STATE = {
  name: null,
  code: null,
  loading: false,
  success: false,
  error: false,
};

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_TEAM_REQUEST:
      return {
        ...state,
        name: action.payload.name,
        code: action.payload.code,
        success: false,
        loading: true,
        error: false,
      };
    case Types.CREATE_TEAM_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
      };
    case Types.CREATE_TEAM_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };

    case Types.JOIN_TEAM_REQUEST:
      return {
        ...state,
        code: action.payload.code,
        error: false,
        success: false,
        loading: true,
      };
    case Types.JOIN_TEAM_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
      };
    case Types.JOIN_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
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
};
