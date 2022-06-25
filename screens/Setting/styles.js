import {StyleSheet} from 'react-native'
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.backgroundSetting,     
    },
    background:{
        backgroundColor: COLORS.white,
        marginTop:40,
        paddingHorizontal:20,
        marginHorizontal:20,
        height:'80%',     
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        marginTop: 20,
        color: COLORS.titletext,
        marginBottom:25
    },
    
})

export default styles;