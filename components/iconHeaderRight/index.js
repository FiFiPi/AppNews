import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import styles from './styles'
const IconHeader = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        
    )
}

export default IconHeader
