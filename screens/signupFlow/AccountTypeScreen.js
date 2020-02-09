import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import get from 'lodash/get'

import { Context as SignupContext } from 'context/SignupContext'
// import NavLink from 'components/NavLink'
import NavLink from 'components/NavLink'

const AccountTypeScreen = ({ navigation }) => {
  const { saveAccountType, clearErrorMessage } = useContext(SignupContext)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
        <TouchableOpacity style={styles.area} onPress={() => saveAccountType('company')}>
          <Text h3 style={styles.text}>We are a company</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => saveAccountType('hero')}>
        <Text h3 style={styles.text}>I want to work a delivery hero</Text>
      </TouchableOpacity>
      <NavLink
        text="< Go Back"
        routeName="Intro"
      />
    </View>
  )
}

AccountTypeScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
  },
  area: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 100,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default AccountTypeScreen
