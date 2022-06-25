import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation'
import {DrawerContent} from './screens'
import SettingStackScreen from './navigation/SettingNavigation'
import CategoryService from './services/category'
import { Provider } from 'react-redux'
import store from './store'
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
export default function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="MyTabs"
          screenOptions={{
            headerShown:false 
          }}
          drawerContent={(props)=> <DrawerContent {...props}/>}
        >
          <Drawer.Screen name="MyTabs" component={MyTabs}/>
          <Drawer.Screen name="Setting" component={SettingStackScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}