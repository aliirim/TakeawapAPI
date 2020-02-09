import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NavigationEvents } from 'react-navigation'

const CompanyDashboardScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text>Selam</Text>
    </View>
  )
}

CompanyDashboardScreen.navigationOptions = () => {
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

export default CompanyDashboardScreen
