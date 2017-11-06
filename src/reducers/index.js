import { combineReducers } from 'redux'
import posts from './posts'
import visibilityFilter from './visibilityFilter'

const twApp = combineReducers({
  posts,
  visibilityFilter
})

export default twApp
