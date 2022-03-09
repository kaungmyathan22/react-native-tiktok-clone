import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeBottomTabNavigator from './homeBottomTabNavigator';
import CreatePost from '../screens/CreatePost';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, backgroundColor: 'black'}}>
        <Stack.Screen name="MainScreen" component={HomeBottomTabNavigator} />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
