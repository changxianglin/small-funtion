import { combineReducers } from 'redux'
import homeReducer from '../containers/Home/store/reducer'
import barReducer from '../containers/Bar/store/reducer'

const rootReducer = combineReducers({
  home: homeReducer,
  bar: barReducer
})

export default rootReducer