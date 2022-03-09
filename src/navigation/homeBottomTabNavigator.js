import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Camera from '../screens/Camera';
import plusIcon from '../assets/images/plus-icon.png';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#000',
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Camera}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color}) => (
            <Image
              source={plusIcon}
              style={{height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="message-minus-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;

const styles = StyleSheet.create({});
