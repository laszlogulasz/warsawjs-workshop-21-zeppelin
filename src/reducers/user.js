import {SET_USER_PROFILE} from '../actions'
const INITIAL_STATE = {
  profile:{}
}
//odpowiedz na akcję wywołaną w funkcji
const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_USER_PROFILE:
    return {
      profile: action.userData
    }
    default:
      return state
  }
}
export default user
