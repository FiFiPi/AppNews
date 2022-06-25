import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const IconHeader = () => {
    const navigation = useNavigation();
    const onDrawer = () => {
        navigation.openDrawer()
    }
    return (
        <TouchableOpacity onPress={onDrawer} style={styles.container}>
            <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
        
    )
}

export default IconHeader
