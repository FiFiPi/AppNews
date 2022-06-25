import {StyleSheet} from 'react-native'
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    container:{
        flex:1,   
    },
    boxImg:{
        flex:1
    },
    img:{
        width:'100%',
        height:'100%'
    },
    box:{
        flex:3,
        paddingHorizontal:20,
        paddingVertical:40,
        shadowColor: COLORS.shadow,
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation:10
    },
    boxContent:{
        flex:1,
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10
    }
})
export default styles;