import React, {useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPriceCoin} from '../../store/slices/price'
import {PriceCoin} from '../../components'
import styles from './styles'
const CoinScreen = () => {
    const dispatch = useDispatch()
    const priceCoin = useSelector(state => state.Price.Coin)
    useEffect(() => {
        dispatch(fetchPriceCoin())
    }, [])
    const showCoin = ({item}) => {
        return (
            <PriceCoin data={item}/>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Coin</Text>
                    <Text style={styles.textTitle}>Price (USD)</Text>
                    <Text style={styles.textTitle}>Change24h(%)</Text>
                </View>
                {
                    priceCoin.length !== 0 && (
                        <FlatList 
                            data={priceCoin}
                            renderItem={showCoin}
                            keyExtractor={item => item.id.toString()}
                        />
                    )
                }
            </View>
        </View>
    )
}

export default CoinScreen
