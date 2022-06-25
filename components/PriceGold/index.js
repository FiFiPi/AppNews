import React from 'react'
import { View, Text } from 'react-native'
import {FormatPriceGold} from '../../help'
import styles from './styles'
const PriceGold = ({data,numberDown}) => {
    const layoutText = numberDown ? styles.textDow : styles.textInc
    return (
        <View style={styles.gold}>
            <View style={styles.column}>
                <Text style={styles.text}>{data.type}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.text}>{FormatPriceGold(data.buy)}</Text>
            </View>
            <View style={styles.column}>
                <Text style={layoutText}>{FormatPriceGold(data.sell)}</Text>
            </View>
        </View>
                
    )
}

export default PriceGold
