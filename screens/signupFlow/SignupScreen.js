import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import { Context as SignupContext } from 'context/SignupContext'

import AccountTypeScreen from './AccountTypeScreen'
import CompanyEntryScreen from './CompanyEntryScreen'
import CompanyAddressEntryScreen from './CompanyAddressEntryScreen'
import CredentialEntryScreen from './CredentialEntryScreen'

const SignupScreen = ({ navigation }) => {
  const { state, clearErrorMessage } = useContext(SignupContext)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      {state.step === 'accountType' && <AccountTypeScreen />}
      {state.step === 'companyDetailEntry' && <CompanyEntryScreen />}
      {state.step === 'companyAddressEntry' && <CompanyAddressEntryScreen />}
      {state.step === 'credentialEntry' && <CredentialEntryScreen />}
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
})

export default SignupScreen
