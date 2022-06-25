import React, {useState} from 'react'
import {DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {COLORS} from '../../contains'   

const DrawerItemComponent = ({name, setActive, active}) => {
    const navigation = useNavigation();
    // const [active, setActive] = useState('Home')
    let icon, label;
    switch (name) {
        case 'Home':
            icon    = "ios-home-outline"
            label   = 'Trang chủ'
            break;
        case 'Gold':
            icon    = "ios-podium-outline"
            label   = 'Giá Vàng'
            break;
        case 'Coin':
            icon    = "ios-pulse-outline"
            label   = 'Giá Coin'
            break;
        case 'Setting':
            icon    = "ios-settings-outline"
            label   = 'Cài đặt'
            break;
        default:
            break;
    }
    return (
        <DrawerItem
            focused={active == name ? true : false}
            activeTintColor={COLORS.primary}
            icon={({color, size})=>(
                <Ionicons
                name={icon} size={size} color={color}
                />
            )}
            label={label}
            onPress={() => {
                setActive(name)
                navigation.navigate(name)
            }}
        />
    )
}

export default DrawerItemComponent
