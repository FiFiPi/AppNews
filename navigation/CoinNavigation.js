import React from 'react'
import { View, Text } from 'react-native'
import {CoinScreen} from '../screens'
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS} from '../contains'
import {IconHeader} from '../components'
const CoinStack = createStackNavigator();
function CoinStackScreen() {
  return (
    <CoinStack.Navigator
        screenOptions={{
        headerMode: 'screen',
        headerTintColor: COLORS.white,
        headerStyle: { backgroundColor: COLORS.layoutText },
        }}
    >
      <CoinStack.Screen name="CoinScreen" component={CoinScreen} 
                        options={{
                          headerLeft:()=><IconHeader />,
                          title:"Giá Bitcoin"
                        }}/>
    </CoinStack.Navigator>
  );
}
export default CoinStackScreen
