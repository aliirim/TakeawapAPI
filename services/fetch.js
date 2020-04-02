import axios from 'axios'
import {AsyncStorage} from 'react-native'
// import { API_ENDPOINT } from 'constants'
const API_ENDPOINT = 'https://takeaway-hero-api.herokuapp.com/graphql'
// let url
// if (__DEV__) {
//   url = 'http://cd14184c.ngrok.io'
// } else {
//   url = 'https://sleepy-savannah-10606.herokuapp.com'
// }

const instance = axios.create({
    baseURL: API_ENDPOINT,
    method: 'post'
})

// instance.interceptors.request.use(
//   async config => {
//     const token = await AsyncStorage.getItem('token')
//     console.log('token=====>', token)
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   err => {
//     console.log('Axios ERROR', err)
//     return Promise.reject(err)
//   }
// )

export default instance
