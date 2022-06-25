import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ProductColumn from '../ProductColumn'
import { useNavigation } from '@react-navigation/native';
import { fetchArticleWithCategoryID } from '../../store/slices/article'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'
const CategoryColumn = ({ title, categoryId }) => {
    const dispatch = useDispatch()
    const articleData = useSelector(state => state.Article.items)
    const navigation = useNavigation()
    useEffect(() => {
        dispatch(fetchArticleWithCategoryID({ id: categoryId, limit: 3 }))
    }, [])

    const articleInCategory = articleData.filter(item => item.category_id == categoryId)
    const changeCategory = () => {
        navigation.push('CategoryScreen', {
            name: title,
            categoryId: categoryId
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={changeCategory} style={styles.title}>
                <Text style={styles.textTitle}>{title}</Text>
            </TouchableOpacity>
            {
                articleInCategory.length !== 0 && (
                    <View style={styles.box}>
                        <ProductColumn data={articleInCategory[0]} />
                        <ProductColumn data={articleInCategory[1]} />
                    </View>
                )
            }
        </View>
    )
}

export default CategoryColumn
