import {SET_POSTS_LIST} from '../actions'
const INITIAL_STATE = {
  list:[]
}
//odpowiedz na akcję wywołaną w funkcji
const posts = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_POSTS_LIST:
    return {
      list: action.list
    }
    default:
      return state
  }
}
export default posts
