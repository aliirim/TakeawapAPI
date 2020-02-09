import get from 'lodash/get'
import fetch from 'services/fetch'

const SIGNIN_USER = `
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`

const SIGNUP_USER = `
  mutation signupUser($input: SignupInput) {
    signupUser(input: $input) {
      message
      token
      success
      customerType
    }
  }
`

/**
* Signin user
* @param {string} email
* @param {string} password
  * @returns {Promise<*>}
*/
export const signinUser = async (email, password) => {
  try {
    const { data } = await fetch({
      data: {
        query: SIGNIN_USER,
        variables: { 
          email,
          password
        }
      }
    })
    console.log('signinUser result ==>', data )
    return get(data, 'data.loginUser.token')   
  } catch (error) {
    console.log('Siginn error', error)
    Promise.reject(error) // todo: check the message
  }
}

/**
* Signup user
* @param {Object} userDetail
* @param {string} userDetail.email
* @param {string} userDetail.password
* @param {string} userDetail.name
* @returns {Promise<*>}
*/
export const signupUser = async (userDetail) => {
  console.log(userDetail)
  try {
    const { data } = await fetch({
      // method:'post',
      data: {
        query: SIGNUP_USER,
        variables: {
          input: { ...userDetail }
        }
      }
    })
    console.log('API result', data)
    return get(data, 'data.signupUser.success', false) 
  } catch (error) {
    Promise.reject(error) // todo: check the message
  }
}