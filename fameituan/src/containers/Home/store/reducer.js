import { actionTypes } from './index'

const initalState = {
  title: '首页',
  list: [
    1, 2, 3, 4, 5
  ]
}

const homeReducer = (state = initalState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LIST:
      return {
        ...state,
        list: [
          action.data
        ]
      }
    default:
      return state
  }
}

export default homeReducer