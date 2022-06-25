import React from 'react'
import { View, Text } from 'react-native'
import {HomeScreen, ProductScreen, CategoryScreen} from '../screens'
import { createStackNavigator } from '@react-navigation/stack';
import {IconHeader, IconHeaderRight} from '../components'
import {COLORS} from '../contains'

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: COLORS.white,
        headerStyle: { backgroundColor: COLORS.layoutText },
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} 
                        options={{
                          title:'Tin tức tổng hợp',
                          headerLeft:()=><IconHeader />,
                          headerRight:()=><IconHeaderRight/>
                          }}/>
      <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={({route})=>({title: route.params.name})}/>
      <HomeStack.Screen name="ProductScreen" component={ProductScreen} options={({route})=>({title: route.params.name})}/>     
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen
