import React, {useContext, useState} from 'react'
import {View, StyleSheet, Picker} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import {NavigationEvents} from 'react-navigation'
import get from 'lodash/get'

import {Context as SignupContext} from 'context/SignupContext'
// import AddressEntry from 'components/AddressEntry'
// import NavLink from 'components/NavLink'
import Spacer from 'components/Spacer'

const CompanyAddressEntryScreen = ({navigation}) => {
    const {state, saveCompanyAddress, clearErrorMessage} = useContext(SignupContext)
    const [address, setAddress] = useState(get(state, 'companyDetail.address', {}))
    // const [country, setCountry] = useState(get(address, 'country', ''))
    // const [county, setCounty] = useState(get(address, 'county', ''))
    // const [city, setCity] = useState(get(address, 'city', ''))
    // const [postCode, setPostcode] = useState(get(address, 'postCode', ''))
    // const [addressLine, setAddressLine] = useState(get(address, 'addressLine', ''))

    const onSubmit = () => {
        saveCompanyAddress(address)
    }
    /**
     * Street address line1 *
     * Street address line2 *
     * Postcode *
     * Town/City *
     * Country *
     * County
     *
     */

    return (
        < View
    style = {styles.container} >
        < NavigationEvents
    onWillBlur = {clearErrorMessage}
    />
    < Spacer / >
    < Spacer / >
    < Text
    h3 > Company
    address
    detail < /Text>
    < Spacer / >
    < Input
    label = 'Country'
    value = {address.country}
    onChangeText = {(value)
=>
    setAddress({...address, country: value})
}
    autoCapitalize = 'none'
    autoCorrect = {false}
    />
    < Spacer / >
    < Spacer / >
    < Input
    label = 'County'
    value = {address.county}
    onChangeText = {(value)
=>
    setAddress({...address, county: value})
}
    autoCapitalize = 'none'
    autoCorrect = {false}
    />
    < Spacer / >
    < Input
    label = 'City'
    value = {address.city}
    onChangeText = {(value)
=>
    setAddress({...address, city: value})
}
    autoCapitalize = 'none'
    autoCorrect = {false}
    />
    < Spacer / >
    < Input
    label = 'Post Code/Zip code'
    value = {address.postcode}
    onChangeText = {(value)
=>
    setAddress({...address, postcode: value})
}
    autoCapitalize = 'none'
    autoCorrect = {false}
    />
    < Spacer / >
    < Input
    label = 'Address Line'
    value = {address.addressLine1}
    onChangeText = {(value)
=>
    setAddress({...address, addressLine1: value})
}
    autoCapitalize = 'none'
    autoCorrect = {false}
    />
    < Input
    label = 'Address Line'
    value = {address.addressLine2}
    onChangeText = {(value)
=>
    setAddress({...address, addressLine2: value})
}
    autoCapitalize = 'none'
    autoCorrect = {false}
    />
    {/* <Text>Country</Text> */
    }
    {/* <Picker
        mode='dropdown'
        selectedValue={country}
        // style={{ height: 50, width: 100 }}
        onValueChange={itemValue => setCountry(itemValue)}
      >
        <Picker.Item label="United Kingdom" value="United Kingdom" />
        <Picker.Item label="Scotland" value="Scotland" />
      </Picker> */
    }

<
    Spacer / >
    < Button
    title = 'Save'
    onPress = {onSubmit}
    />
    < /View>
)
}

CompanyAddressEntryScreen.navigationOptions = () => {
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

export default CompanyAddressEntryScreen
