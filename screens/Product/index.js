import React from 'react'
import { View, Text, Image} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

import styles from './styles'
const ProductScreen = () => {
    const route = useRoute()
    return (
        <View style={styles.container}>
            <View style={styles.boxImg}>
                <Image style={styles.img} source={{uri: route.params.thumb}}/>
            </View >
            <View style={styles.box}>
                <View style={styles.boxContent}>
                    <WebView source={{ uri: route.params.link }} />
                </View>
            </View>
        </View>
    )
}

export default ProductScreen
