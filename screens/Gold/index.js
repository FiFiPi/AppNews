import React, {useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPriceGold} from '../../store/slices/price'
import {PriceGold} from '../../components'

const GoldScreen = () => {
    const dispatch = useDispatch()
    const priceGold = useSelector(state => state.Price.Gold)
    useEffect(() => {
        dispatch(fetchPriceGold())
    }, [])
    const showGold = ({item}) => {
        return (
            <PriceGold data={item}/>     
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Vàng</Text>
                    <Text style={styles.textTitle}>Mua vào</Text>
                    <Text style={styles.textTitle}>Bán ra</Text>
                </View>
                {
                    priceGold.length !== 0 && (
                        <FlatList
                            data={priceGold}
                            renderItem={showGold}
                            keyExtractor={item => item.type.toString()}
                        />                
                    )
                }
            </View>
        </View>
    )
}

export default GoldScreen
