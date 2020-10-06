/*
 * Action Types
 */
export const Types = {
  CREATE_STORY: 'CREATE_STORY',
  CREATE_STORY_SUCCESS: 'CREATE_STORY_SUCCESS',
  CREATE_STORY_FAILURE: 'CREATE_STORY_FAILURE',

  MY_STORIES_REQUEST: 'MY_STORIES_REQUEST',
  MY_STORIES_REQUEST_SUCCESS: 'MY_STORIES_REQUEST_SUCCESS',
  MY_STORIES_REQUEST_FAILURE: 'MY_STORIES_REQUEST_FAILURE',

  STORIES_REQUEST_BYID: 'STORIES_REQUEST_BYID',
  STORIES_REQUEST_BYID_SUCCESS: 'STORIES_REQUEST_BYID_SUCCESS',
  STORIES_REQUEST_BYID_FAILURE: 'STORIES_REQUEST_BYID_FAILURE',

  EDIT_STORY: 'EDIT_STORY',
  EDIT_STORY_SUCCESS: 'EDIT_STORY_SUCCESS',
  EDIT_STORY_FAILURE: 'EDIT_STORY_FAILURE',

  DELETE_STORY: 'DELETE_STORY',
  DELETE_STORY_SUCCESS: 'DELETE_STORY_SUCCESS',
  DELETE_STORY_FAILURE: 'DELETE_STORY_FAILURE',
};

/*
 * Reducer
 */
const INITIAL_STATE = {
  title: null,
  userId: null,
  description: null,
  teamId: null,
  storyId: null,
  data: [],
  loading: false,
  success: false,
  error: false,
};

export default function story(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_STORY:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        success: false,
        loading: true,
        error: false,
      };
    case Types.CREATE_STORY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
      };
    case Types.CREATE_STORY_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };

    case Types.MY_STORIES_REQUEST:
      return {
        ...state,
        userId: action.payload.userId,
        error: false,
        success: false,
        loading: true,
      };
    case Types.MY_STORIES_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        success: true,
        loading: false,
        error: false,
      };
    case Types.MY_STORIES_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case Types.STORIES_REQUEST_BYID:
      return {
        ...state,
        teamId: action.payload.teamId,
        error: false,
        success: false,
        loading: true,
      };
    case Types.STORIES_REQUEST_BYID_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        success: true,
        loading: false,
        error: false,
      };
    case Types.STORIES_REQUEST_BYID_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };

    case Types.EDIT_STORY:
      return {
        ...state,
        storyId: action.payload.storyId,
        error: false,
        success: false,
        loading: true,
      };
    case Types.EDIT_STORY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
      };
    case Types.EDIT_STORY_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };

    case Types.DELETE_STORY:
      return {
        ...state,
        storyId: action.payload.storyId,
        error: false,
        success: false,
        loading: true,
      };
    case Types.DELETE_STORY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
      };
    case Types.DELETE_STORY_FAILURE:
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
  createStory: (title, description) => ({
    type: Types.CREATE_STORY_REQUEST,
    payload: { title, description },
  }),

  createStorySuccess: () => ({
    type: Types.CREATE_STORY_SUCCESS,
  }),

  createStoryFailure: () => ({
    type: Types.CREATE_STORY_FAILURE,
  }),

  myStoriesRequest: (userId) => ({
    type: Types.MY_STORIES_REQUEST,
    payload: { userId },
  }),

  myStoriesSuccess: (data) => ({
    type: Types.MY_STORIES_REQUEST_SUCCESS,
    payload: { data },
  }),

  myStoriesFailure: () => ({
    type: Types.MY_STORIES_REQUEST_FAILURE,
  }),

  requestStoryById: (teamId) => ({
    type: Types.MY_STORIES_REQUEST,
    payload: { teamId },
  }),

  requestStoryByIdSuccess: (data) => ({
    type: Types.MY_STORIES_REQUEST_SUCCESS,
    payload: { data },
  }),

  requestStoryByIdFailure: () => ({
    type: Types.MY_STORIES_REQUEST_FAILURE,
  }),

  editStory: (teamId) => ({
    type: Types.EDIT_STORY,
    payload: { teamId },
  }),

  editStorySuccess: (data) => ({
    type: Types.EDIT_STORY_SUCCESS,
    payload: { data },
  }),

  editStoryFailure: () => ({
    type: Types.EDIT_STORY_FAILURE,
  }),

  deleteStory: (teamId) => ({
    type: Types.DELETE_STORY,
    payload: { teamId },
  }),

  deleteStorySuccess: (data) => ({
    type: Types.DELETE_STORY_SUCCESS,
    payload: { data },
  }),

  deleteStoryFailure: () => ({
    type: Types.DELETE_STORY_FAILURE,
  }),
};
