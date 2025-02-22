import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import Spacer from './Spacer'
import {withNavigation} from 'react-navigation'

const NavLink = ({navigation, text, routeName, style}) => {
    return (
        < TouchableOpacity
    onPress = {()
=>
    navigation.navigate(routeName)
}
    style = {style} >
        < Spacer >
        < Text
    style = {styles.link} > {text} < /Text>
        < /Spacer>
        < /TouchableOpacity>
)
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
})

export default withNavigation(NavLink)
