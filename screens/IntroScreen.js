import React from 'react'
import {withNavigation} from 'react-navigation'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import Spacer from 'components/Spacer'
import NavLink from 'components/NavLink'

const IntroScreen = ({navigation}) => {
    return (
        < View
    style = {styles.container} >
        < Text > Welcome
    to
    our
    app < /Text>
    < TouchableOpacity
    onPress = {()
=>
    navigation.navigate('Signup')
}>
<
    Spacer >
    < Text
    style = {styles.greenLink} > Register < /Text>
        < /Spacer>
        < /TouchableOpacity>
        < TouchableOpacity
    onPress = {()
=>
    navigation.navigate('Signin')
}>
<
    Spacer >
    < Text
    style = {styles.link} > Login < /Text>
        < /Spacer>
        < /TouchableOpacity>
        < /View>
)
}

IntroScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    greenLink: {
        color: 'green',
        borderColor: 'grey',
    },
    link: {
        color: 'blue'
    }
})

export default withNavigation(IntroScreen)
