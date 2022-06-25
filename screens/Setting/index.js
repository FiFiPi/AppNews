import React from 'react'
import { View, Text, FlatList } from 'react-native'
import {useSelector} from 'react-redux'
import styles from './styles'
import {CategorySetting} from '../../components'
const SettingScreen = () => {
    const categoryData = useSelector(state => state.Category.items)
    const showSetting = ({item}) => {
        return (
            <CategorySetting data={item}/>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text style={styles.title}>Danh mục</Text>
                <FlatList 
                    data={categoryData}
                    renderItem={showSetting}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            
        </View>
    )
}

export default SettingScreen
