import {StyleSheet} from 'react-native'
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    gold:{
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomWidth:1,
        borderColor:COLORS.border,
        height:50
    },
    text:{
        color:COLORS.layoutText,
        fontWeight:'500',
        
    },
    column:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textInc:{
        color:COLORS.numberInc
    },
    textDow:{
        color:COLORS.numberDow
    }
})
export default styles