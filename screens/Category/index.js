import React, {useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import ProductColumn from '../../components/ProductColumn'
import { useNavigation, useRoute } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllArticleWithCategoryID} from '../../store/slices/article'

import styles from './styles'
const CategoryScreen = () => {
    const dispatch = useDispatch()
    const route = useRoute()
    const articleData = useSelector(state => state.Article.allItems)
    useEffect(() => {
        dispatch(fetchAllArticleWithCategoryID({id: route.params.categoryId}))
    }, [])

    const showArticle = ({item}) => {
        return (
            <ProductColumn data={item}/>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={articleData}
                renderItem={showArticle}
                keyExtractor={(item)=> item.id.toString()}
            />            
        </View>
    )
}

export default CategoryScreen
