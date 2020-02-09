import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainTabNavigator from './MainTabNavigator'
import ResolveAuthScreen from 'screens/ResolveAuthScreen'
import IntroScreen from 'screens/IntroScreen'
import SignupScreen from 'screens/signupFlow/SignupScreen'
import SigninScreen from 'screens/SigninScreen'
// import CompanyDashboardScreen from 'screens/CompanyDashboardScreen'

export default createAppContainer(
  createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Intro: IntroScreen,
      Signup: SignupScreen,
      Signin: SigninScreen,
    }),
    // company: {
    //   CompanyDashboard: CompanyDashboardScreen,
    // },
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
)
