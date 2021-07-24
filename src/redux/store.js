import { configureStore } from '@reduxjs/toolkit'
import postReducer from 'redux/posts/reducer';

export default configureStore({
  reducer: {
    posts: postReducer,
  },
})