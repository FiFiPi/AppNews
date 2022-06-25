import React, { useEffect } from 'react'
import { View, ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../store/slices/category'
import { CategoryGrid } from '../../components'
import CategoryColumn from '../../components/CategoryColumn'
import styles from './styles'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const CategoryData = useSelector(state => state.Category.items)
    const showHome = useSelector(state => state.Setting.home)

    useEffect(() => {
        dispatch(fetchCategory())
    }, [showHome])
    const showCategoryHome = ({ item }) => {
        const categoryItem = CategoryData?.find(category => category.id === item.id)

        return (
            item.status && categoryItem && (
                item.type === 'grid'
                    ? <CategoryGrid title={categoryItem.name} categoryId={categoryItem.id} />
                    : <CategoryColumn title={categoryItem.name} categoryId={categoryItem.id} />
            )
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={showHome}
                renderItem={showCategoryHome}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}
export default HomeScreen
