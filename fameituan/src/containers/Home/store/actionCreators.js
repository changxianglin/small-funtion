import axios from 'axios'
import { actionTypes } from './index'

export const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data
})

export const getList = () => {
  return (dispatch) => {
     axios.get('/api/home.json').then((res) => {
      dispatch(changeList(res.data))
     }).catch(err => {
       console.error(err)
     })
  }
}