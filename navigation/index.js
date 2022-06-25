import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './HomeNavigation'
import GoldStackScreen from './GoldNavigation'
import CoinStackScreen from './CoinNavigation'
import {COLORS} from '../contains'
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return(
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'ios-home' : 'ios-home-outline'
                break;
              case 'Gold':
                iconName = focused ? 'ios-cash' : 'ios-cash-outline'
                break;
              case 'Coin':
                iconName = focused ? 'ios-pulse' : 'ios-pulse-outline'
                break;
              default:
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.active,
          tabBarInactiveTintColor: COLORS.white,
          tabBarStyle:{
            backgroundColor: COLORS.layoutText,
            height:65,
            paddingBottom:10
          },
          tabBarLabelStyle:{
            fontSize:13
          },
          headerShown:false
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Gold" component={GoldStackScreen} />
        <Tab.Screen name="Coin" component={CoinStackScreen} />
      </Tab.Navigator>
    )} 
export default MyTabs