import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import BottomTab from './components/BottomTab';
import SearchPage from './components/SearchPage';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="home"
          component={BottomTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="search"
          component={SearchPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
