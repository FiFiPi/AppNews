import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import Icon from '../icon'
import { useNavigation, useRoute } from '@react-navigation/native';
import {CustomDate} from '../../help'
import styles from './styles'
const ProductGrid = ({data}) => {
    const navigation = useNavigation()
    const onArticle = () => {
        navigation.push('ProductScreen',{
            name: data.title,
            id : data.id,
            link: data.link,
            thumb: data.thumb
        })
    }
    return (
        <TouchableOpacity onPress={onArticle} style={styles.container}>
            <View style={styles.product}>
                <View style={styles.boxImg}>
                    <Image style={styles.img} source={{uri: data.thumb}}/>
                </View >
                <View style={styles.boxContent}>
                    <Text numberOfLines={2} style={styles.textContent}>{data.title}</Text>
                    <View style={styles.boxIcon}>
                        <Icon name={"clockcircle"}/>
                        <Text style={styles.text}>{CustomDate(data.publish_date)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductGrid