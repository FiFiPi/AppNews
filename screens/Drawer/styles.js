import {StyleSheet} from 'react-native'
import {COLORS} from '../../contains'
const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        flex:1
    },
    top:{
        alignItems:'center',
        width:'100%',
        height:220 ,
        justifyContent:'center'
    },
    body:{
        backgroundColor:COLORS.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius:15
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:50,
    },
    viewimg:{
        width:100,
        height:100,
        alignItems:'center',
        
    },
    textTop:{
        fontWeight:'bold',
        color: COLORS.background,
        fontSize:20,
        marginTop:15
    },
    viewBot:{
        backgroundColor:COLORS.primary
    },
    textBot:{
        fontSize:20,
        fontWeight:'bold',
        color:COLORS.background,
        paddingHorizontal:40,
        paddingVertical:20
    }

})
export default styles;