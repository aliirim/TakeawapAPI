import React, {useState, useEffect} from 'react'
import {ScrollView, StyleSheet, Text, Button} from 'react-native'
import {ExpoLinksView} from '@expo/samples'
// import { gql } from "apollo-boost"
// import gql from 'graphql-tag'
// import { useMutation } from "@apollo/react-hooks"

export default function LinksScreen() {
    // const [myToken, setToken] = useState('')

    // const buttonOnPress = async () => {
    //   signinUser('izzetertas@gmail.com', '1234')
    //     .then(data => setToken(data))
    //     .catch (error => console.log(error))
    // }

    return (
        < ScrollView
    style = {styles.container} >
        < Button
    title = 'Get token'
    onPress = {buttonOnPress}
    />
    {/* <Text>Token : {myToken}</Text> */
    }
    {/**
     * Go ahead and delete ExpoLinksView and replace it with your content
     * we just wanted to provide you with some helpful links.
     */
    }
<
    ExpoLinksView / >
    < /ScrollView>
)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
})
