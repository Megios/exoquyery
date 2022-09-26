import { combineReducers } from '@reduxjs/toolkit'
import { userSlice } from './users.slice'
import { postSlice } from './posts.slice'

const rootReducer = combineReducers({
  users: userSlice.reducer,
  posts: postSlice.reducer
})

export default rootReducer