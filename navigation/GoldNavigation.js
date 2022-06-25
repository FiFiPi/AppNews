import React from 'react'
import { View, Text } from 'react-native'
import {GoldScreen} from '../screens'
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS} from '../contains'
import {IconHeader} from '../components'
const GoldStack = createStackNavigator();

function GoldStackScreen() {
  return (
    <GoldStack.Navigator
        screenOptions={{
        headerMode: 'screen',
        headerTintColor: COLORS.white,
        headerStyle: { backgroundColor:COLORS.layoutText  },
      }}
    >
      <GoldStack.Screen name="GoldScreen" component={GoldScreen} 
                        options={{
                          title:'Giá vàng',
                          headerLeft:()=><IconHeader />
                        }}/>
    </GoldStack.Navigator>
  );
}

export default GoldStackScreen
