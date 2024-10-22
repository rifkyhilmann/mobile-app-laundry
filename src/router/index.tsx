import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Splash from '../pages/Splash';
import Pesanan from '../pages/Pesanan';
import Akun from '../pages/Akun';
import BottomNavigation from '../components/BottomNavigation';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
   <Tab.Navigator  tabBar={props => <BottomNavigation {...props} />}>
        <Tab.Screen name='Home' component={Home} options={{headerShown : false}} />
        <Tab.Screen name='Pesanan' component={Pesanan} />
        <Tab.Screen name='Akun' component={Akun} />
   </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown : false}} />
        <Stack.Screen name='MainApp' component={MainApp} options={{headerShown : false}} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})