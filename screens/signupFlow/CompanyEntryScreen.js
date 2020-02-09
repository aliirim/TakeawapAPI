import React, { useContext, useState } from 'react'
import { View, StyleSheet, Picker } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import get from 'lodash/get'

import { Context as SignupContext } from 'context/SignupContext'
// import AddressEntry from 'components/AddressEntry'
// import NavLink from 'components/NavLink'
import Spacer from 'components/Spacer'

const CompanyEntryScreen = ({ navigation }) => {
  const { state, clearErrorMessage, saveCompanyDetail } = useContext(SignupContext)
  console.log(state);
  const [phoneNumber, setPhoneNumber] = useState(get(state, 'companyDetail.phoneNumber', ''))
  const [companyName, setCompanyName] = useState(get(state, 'companyDetail.companyName', ''))

  const onSubmit = () => {
    saveCompanyDetail({
      phoneNumber, companyName
    })
  }
  /**
   * Company name *
   * Phone number *
    
   * Street address line1 *
   * Street address line2 *
   * Postcode *
   * Town/City *
   * Country *
   * County
   * 
   */

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Spacer />
      <Spacer />
      <Text h3> Company detail</Text>
      <Spacer />
      <Input
        label='Company name'
        value={companyName}
        onChangeText={setCompanyName}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer/>
      <Input
        label='Phone Number'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer/>
      <Button title='Save' onPress={onSubmit}
      />
    </View>
  )
}

CompanyEntryScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    // marginBottom: 100
  }
})

export default CompanyEntryScreen
