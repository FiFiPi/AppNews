import {Dimensions, StyleSheet} from 'react-native'

import {COLORS} from '../../contains'

const styles = StyleSheet.create({
    img:{
        height:'100%',
        width: '100%',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,  
        resizeMode:'cover'
    },
    container:{
        flex:1,
        marginTop:15,
        flexDirection:'column',
        height:200,
        width:"100%", 
    },
    boxImg:{
        flex:2,
        width:'100%'
    },
    boxContent:{
        flex:1,
        padding:15,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor:COLORS.second,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    boxIcon:{
        flexDirection:'row'
    },
    text:{
        color: COLORS.icon,
        fontSize:14,
        fontWeight:'bold',
    },
    textContent:{
        color:COLORS.title,
        fontWeight:'bold',
        textAlign:'center',
        fontSize : 14,
        marginBottom : 8,        
    },
    product:{
        flex:1,
        width:'100%',
        height:'100%',  
        
    }

})

export default styles;