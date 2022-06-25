import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {Icon} from '../../components'
import { useNavigation, useRoute } from '@react-navigation/native';
import {CustomDate} from '../../help'

import styles from './styles'
const ProductColumn = ({data}) => {
    const navigation = useNavigation()

    const onArticle = () => {
        navigation.push('ProductScreen',{
            name: data.title,
            id  : data.id,
            thumb: data.thumb,
            link : data.link
        })
    }
    return (
        <TouchableOpacity onPress={onArticle} style={styles.container}>
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
        </TouchableOpacity>
    )
}

export default ProductColumn
