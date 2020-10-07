/*
 * Action Types
 */
export const Types = {
  CREATE_COMMENT_REQUEST: 'CREATE_COMMENT_REQUEST',
  CREATE_COMMENT_SUCCESS: 'CREATE_COMMENT_SUCCESS',
  CREATE_COMMENT_FAILURE: 'CREATE_COMMENT_FAILURE',

  GET_COMMENT_FROM_STORY: 'GET_COMMENT_FROM_STORY',
  GET_COMMENT_FROM_STORY_SUCCESS: 'GET_COMMENT_FROM_STORY_SUCCESS',
  GET_COMMENT_FROM_STORY_FAILURE: 'GET_COMMENT_FROM_STORY_FAILURE',

  DELETE_COMMENT: 'DELETE_COMMENT',
  DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
  DELETE_COMMENT_FAILURE: 'DELETE_COMMENT_FAILURE',
};

/*
 * Reducer
 */
const INITIAL_STATE = {
  storyId: null,
  description: null,
  data: [],
  dataComments: [],
  loading: false,
  success: false,
  error: false,
};

export default function comments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        storyId: action.payload.storyId,
        description: action.payload.description,
        success: false,
        loading: true,
        error: false,
      };
    case Types.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        success: true,
        loading: false,
        error: false,
      };
    case Types.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };
    case Types.GET_COMMENT_FROM_STORY:
      return {
        ...state,
        storyId: action.payload.storyId,
        success: false,
        loading: true,
        error: false,
      };
    case Types.GET_COMMENT_FROM_STORY_SUCCESS:
      return {
        ...state,
        dataComments: action.payload.dataComments,
        success: true,
        loading: false,
        error: false,
      };
    case Types.GET_COMMENT_FROM_STORY_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}

/*
 * Actions Creators
 */

export const Creators = {
  createComment: (storyId, description) => ({
    type: Types.CREATE_COMMENT_REQUEST,
    payload: { storyId, description },
  }),

  createCommentSuccess: (data) => ({
    type: Types.CREATE_COMMENT_SUCCESS,
    payload: { data },
  }),

  createCommentFailure: () => ({
    type: Types.CREATE_COMMENT_FAILURE,
  }),

  getComments: (storyId) => ({
    type: Types.GET_COMMENT_FROM_STORY,
    payload: { storyId },
  }),

  getCommentsSuccess: (dataComments) => ({
    type: Types.GET_COMMENT_FROM_STORY_SUCCESS,
    payload: { dataComments },
  }),

  getCommentsFailure: () => ({
    type: Types.GET_COMMENT_FROM_STORY_FAILURE,
  }),
};
