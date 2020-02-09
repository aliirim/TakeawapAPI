import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = (props) => {
  const [email, setEmail] = useState('izzetertas@gmail.com')
  const [password, setPassword] = useState('1234')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(props.errorMessage)

  const isValidated = email.length && password.length && password === confirmPassword

  const onSubmit = () => {
    if(props.type === 'signup' && password !== confirmPassword) {
      return setErrorMessage(`Passwords don't match`)
    }
    setErrorMessage('')
    props.onSubmit({ email, password, confirmPassword })
  }

  return (
    <>
      <Spacer>
        <Text h3>{props.headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      {props.type === 'signup' &&
        <Input
          secureTextEntry
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
      />
      }
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={props.submitButtonText}
          onPress={onSubmit}
          disabled={!isValidated}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
})

export default AuthForm
