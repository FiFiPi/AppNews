import React from 'react'
import { View, Text } from 'react-native'
import {COLORS} from '../../contains'
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles'
const Icon = ({name}) => {
    return (
        <View style={styles.container}>
            <AntDesign name={name} size={18} color={COLORS.icon} />
        </View>
    )
}

export default Icon
