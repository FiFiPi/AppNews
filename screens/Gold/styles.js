import {StyleSheet} from 'react-native'
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.backgroundSetting
    },
    box:{
        marginVertical:20,
        marginHorizontal:20,
        backgroundColor: COLORS.background,
        height:'90%'
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:COLORS.layoutText,
        height:35,
        alignItems:'center'
    },
    textTitle:{
        color:COLORS.active,
        fontWeight:'bold'
    },
    
})
export default styles;