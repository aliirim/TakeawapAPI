import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import { navigate } from 'helpers/navigationRef'
import { signinUser, signupUser } from 'services/userServices'

const initialState = {
  token: null,
  errorMessage: '',
}

const reducer = (state, action) => {
  console.log('authReducer ===>', state, action)
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'signout':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('Main')
  } else {
    navigate('Intro')
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password, customerType }) => {
  
  try {
    const token = await signupUser({ email, password, customerType })
    console.log('Token', token)
    await AsyncStorage.setItem('token', token)
    dispatch({ type: 'signin', payload: token })

    navigate(customerType === 'company' ? 'CompanyDashboard' : 'SignupDetail')
  } catch (err) {
    console.log('Signup Error', err)
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    })
  }
}

const signin = dispatch => async ({ email, password }) => {
  try {
    console.log('signinUser', email, password)
    const token = await signinUser(email, password)
    console.log('Token', token)

    await AsyncStorage.setItem('token', token)
    dispatch({ type: 'signin', payload: token })
    navigate('Main')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    })
  }
}

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout' })
  navigate('loginFlow')
}

const actions = {
  clearErrorMessage,
  signin,
  signout,
  signup,
  tryLocalSignin,
}

export const { Provider, Context } = createDataContext(
  reducer,
  actions,
  initialState,
)
