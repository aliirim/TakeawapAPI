import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Context as AuthContext} from 'context/AuthContext'
import AuthForm from 'components/AuthForm'
import NavLink from 'components/NavLink'

const CredentialEntryScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext)

    return (
        < View
    style = {styles.container} >
        < NavigationEvents
    onWillBlur = {clearErrorMessage}
    />
    < AuthForm
    type = 'signup'
    headerText = "Register"
    errorMessage = {state.errorMessage}
    submitButtonText = "Register"
    onSubmit = {signup}
    />
    < NavLink
    style = {
    {
        alignSelf: 'center'
    }
}
    routeName = "Intro"
    text = "Cancel"
        / >
        < /View>
)
}

// CredentialEntryScreen.navigationOptions = () => {
//   return {
//     header: null
//   }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 150
    }
})

export default CredentialEntryScreen
