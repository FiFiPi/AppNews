import {StyleSheet} from 'react-native'
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    btc:{
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomWidth:1,
        borderColor:COLORS.border,
        height:50,
       
    },
    text:{
        color:COLORS.layoutText,
        fontWeight:'500',
        fontSize: 14,
        
    },
    textInc:{
        color:COLORS.numberInc
    },
    textDow:{
        color:COLORS.numberDow
    },
    column:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default styles