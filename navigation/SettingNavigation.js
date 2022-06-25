import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS} from '../contains'
import {SettingScreen} from '../screens'
import IconHeader from '../components/iconHeader'

const SettingStack = createStackNavigator();

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerMode:'screen',
        headerStyle:{backgroundColor: COLORS.layoutText},
        headerTintColor: COLORS.white
      }}
    >
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} 
                            options={{
                              title:'Cài đặt',
                              headerLeft:()=> <IconHeader />
                            }} />
    </SettingStack.Navigator>
  );
}

export default SettingStackScreen