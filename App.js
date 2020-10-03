/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './Pages/Home';
import CustomerDetails from './Pages/CustomerDetails';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomePage} />
          <Stack.Screen name="CustomerDetail" component={CustomerDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
