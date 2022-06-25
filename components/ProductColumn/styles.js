import {ImageBackground, StyleSheet} from 'react-native'
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    img:{
        height:'100%',
        width: '100%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,  
        resizeMode:'cover'
    },
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
    },
    boxImg:{
        flex:1
    },
    boxContent:{
        flex:1.5,
        backgroundColor:COLORS.second,
        height:'100%',
        justifyContent:'center',
        padding:10,
        borderTopRightRadius:15,
        borderBottomRightRadius:15
    },
    boxIcon:{
        flexDirection:'row',
        marginTop:8
    },
    text:{
        color: COLORS.titletext,
        fontSize:14,
        fontWeight:'bold'
    },
    textContent:{
        color:COLORS.title,
        fontWeight:'bold'
    }
})

export default styles;