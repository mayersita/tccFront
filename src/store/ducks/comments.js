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

  HANDLE_MORE_COMMENTS: 'HANDLE_MORE_COMMENTS',

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
  page: 1,
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
        page: action.payload.page,
        success: false,
        loading: true,
        error: false,
      };
    case Types.GET_COMMENT_FROM_STORY_SUCCESS:
      return {
        ...state,
        dataComments:
          state.page === 1
            ? action.payload.dataComments.docs
            : state.dataComments.concat(action.payload.dataComments.docs),
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

  getComments: (storyId, page) => ({
    type: Types.GET_COMMENT_FROM_STORY,
    payload: { storyId, page },
  }),

  getCommentsSuccess: (dataComments) => ({
    type: Types.GET_COMMENT_FROM_STORY_SUCCESS,
    payload: { dataComments },
  }),

  getCommentsFailure: () => ({
    type: Types.GET_COMMENT_FROM_STORY_FAILURE,
  }),
};
