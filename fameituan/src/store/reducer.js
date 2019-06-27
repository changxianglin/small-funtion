import { combineReducers } from 'redux'
import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as barReducer } from '../containers/Bar/store'

const rootReducer = combineReducers({
  home: homeReducer,
  bar: barReducer
})

export default rootReducer