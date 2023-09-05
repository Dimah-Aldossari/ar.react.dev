// actions.js
export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
  });
  
  export const setSelectedPost = (post) => ({
    type: 'SET_SELECTED_POST',
    payload: post
  });
  
  // reducer.js
  const initialState = {
      posts: [],
      selectedPost: null
  };
  
  const rootReducer = (state = initialState, action) => {

      switch (action.type) {
          case 'SET_POSTS':
              return {
                  ...state,
                  posts: action.payload
              };
          case 'SET_SELECTED_POST':
              return {
                  ...state,
                  selectedPost: action.payload,
                  posts: [
                      action.payload,
                      ...state.posts.filter(post => post.Title !== action.payload.Title)
                  ]
              };
          default:
              return state;
      }
  };
  
  export default rootReducer;
  