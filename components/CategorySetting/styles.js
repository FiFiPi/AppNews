import {StyleSheet} from 'react-native'
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        height:50
    },
    text:{
        fontWeight:'500',
    },
    inputIOS:{
        color: COLORS.black,
        fontSize: 14,
        paddingTop:15
    },
    inputAndroid:{
        color:COLORS.black
    }
    
})

export default styles;