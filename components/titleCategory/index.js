import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
const TitleCategory = ({title, categoryId}) => {
    const navigation   = useNavigation()
    const changeCategory = () => {
        navigation.push('CategoryScreen',{
            name: title,
            categoryId: categoryId
        })
    }
    return (
        <TouchableOpacity onPress={changeCategory} style={styles.title}>
            <Text style={styles.textTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TitleCategory
