import React, {useState} from 'react'
import { View, Text, Image} from 'react-native'
import styles from './styles'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import DrawerItemComponent from '../../components/drawerItem'

const DrawerContent = (props) => {
    const [active, setActive] = useState('Home')
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                    <View style={styles.viewimg}>
                        <Image source={require('../../assets/images/img.png')} style={styles.img}/>           
                    </View >
                    <Text style={styles.textTop}>HoangPhi News</Text>
                </View>
            <DrawerContentScrollView style={styles.body}>
                <DrawerItemComponent name={'Home'} setActive={(value)=>setActive(value)} active={active} />
                <DrawerItemComponent name={'Gold'} setActive={(value)=>setActive(value)} active={active}/>
                <DrawerItemComponent name={'Coin'} setActive={(value)=>setActive(value)} active={active}/>
                <DrawerItemComponent name={'Setting'} setActive={(value)=>setActive(value)} active={active}/>
            </DrawerContentScrollView>
            <View style={styles.viewBot}>
                <Text style={styles.textBot}>@copyRight ZendVn</Text>
            </View>
        </View>
        
    )
}
export default DrawerContent
