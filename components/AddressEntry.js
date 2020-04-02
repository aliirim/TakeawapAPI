import React from 'react'
import {Text, Button, Input} from 'react-native-elements'
import {View, StyleSheet} from 'react-native'

const AddressEntry = (props) => {
    const [postCode, setPostCode] = useState()

    return (
        < View
    style = {styles.container} >
        < Input
    label = 'Country'
    value = {postCode}
    onChangeText = {setPostCode}
    autoCapitalize = "characters"
    autoCorrect = {false}
    />
    < Input
    label = 'Zip/Postcode'
    value = {postCode}
    onChangeText = {setPostCode}
    autoCapitalize = "characters"
    autoCorrect = {false}
    />
    < Input
    label = 'Street Address'
    placeholder = 'Flat, suite, unit, building, floor,etc'
    value = {postCode}
    onChangeText = {setPostCode}
    autoCapitalize = "characters"
    autoCorrect = {false}
    />
    < Input
    label = 'Town/City'
    value = {postCode}
    onChangeText = {setPostCode}
    autoCapitalize = "characters"
    autoCorrect = {false}
    />
    < Input
    label = 'County'
    value = {postCode}
    onChangeText = {setPostCode}
    autoCapitalize = "characters"
    autoCorrect = {false}
    />
    < /View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})