import api from '../utils/api'
import {SET_USER_PROFILE} from './'

const setUserProfile = userData => ({
  type: SET_USER_PROFILE,
  userData
})
export const login = ({username, password}) => async dispach => {
  try {
    const user = await api.user.login( {username, password} )
    dispach(handleAuth({username: user.username}))
  } catch(e) {
    console.log(e);
  }
}

export const handleAuth = data => dispach => {
  dispach(setUserProfile(data))
  localStorage.setItem('warsawjs-username', data.username)
}
