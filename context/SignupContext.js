import {AsyncStorage} from 'react-native'

import createDataContext from 'context/createDataContext'
import {navigate} from 'helpers/navigationRef'
// import { signinUser, signupUser } from 'services/userServices'

const initialState = {
    token: null,
    errorMessage: '',
    accountType: '', // company | hero
    step: 'accountType', // accountType | companyDetailEntry | userDetailEntry | credentialEntry
    companyDetail: {
        phoneNumber: '07857',
        companyName: '',
        address: {
            country: '',
            city: '',
            town: '',
            postCode: '',
        }
    }
}

const reducer = (state, action) => {
    console.log('signupReducer ===>', state, action)
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'save_account_type':
            return {
                ...state,
                errorMessage: '',
                accountType: action.payload,
                step: action.payload === 'company' ? 'companyDetailEntry' : 'userDetailEntry'
            }
        case 'save_company_detail':
            return {
                ...state,
                errorMessage: '',
                companyDetail: {
                    ...state.companyDetail,
                    ...action.payload,
                },
                step: 'companyAddressEntry'
            }
        case 'save_company_address':
            return {
                ...state,
                errorMessage: '',
                companyDetail: {
                    ...state.companyDetail,
                    address: {
                        ...action.payload,
                    },
                },
                step: 'credentialEntry',
            }
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state
    }
}

const saveAccountType = dispatch => async (payload) => {
    dispatch({type: 'save_account_type', payload})
}

const saveCompanyDetail = dispatch => async (payload) => {
    dispatch({type: 'save_company_detail', payload})
}

const saveCompanyAddress = dispatch => async (payload) => {
    dispatch({type: 'save_company_address', payload})
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}

const actions = {
    clearErrorMessage,
    saveAccountType,
    saveCompanyDetail,
    saveCompanyAddress,
}

export const {Provider, Context} = createDataContext(
    reducer,
    actions,
    initialState
)
