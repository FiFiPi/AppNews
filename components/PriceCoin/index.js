import React from 'react'
import { View, Text } from 'react-native'
import {FormatChangeCoin, FormatPriceCoin} from '../../help/index'
import styles from './styles'
const PriceCoin = ({ data}) => {
    const layoutText = data.percent_change_24h < 0 ? styles.textDow : styles.textInc
    return (
        <View style={styles.btc}>
            <View style={styles.column}>
                <Text style={styles.text}>{data.name}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.text}>{FormatPriceCoin(data.price)}</Text>
            </View>
            <View style={styles.column}>
                <Text style={layoutText}>{FormatChangeCoin(data.percent_change_24h)}</Text>
            </View>
        </View>
    )
}

export default PriceCoin
