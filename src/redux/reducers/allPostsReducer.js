import {GET_DATA_FOR_ALL_POSTS} from '../actions'

const initialState = {
  allPosts: [],
}

const allPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FOR_ALL_POSTS:
      return {
        ...state,
        allPosts:[action.payload]
      }

    default:
      return state
  }
}

export default allPostsReducer