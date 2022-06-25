import {StyleSheet, Dimensions} from 'react-native'
import {COLORS} from '../../contains'

const height = Dimensions.get('window').height
const styles = StyleSheet.create({
    container:{
        marginTop:15,
        width : '100%',
        height : height/2,
    },
    box:{
        flex : 1,
        flexDirection : 'row',
        
        
    },
    title:{
        borderBottomColor:COLORS.layoutText,
        height:30,
        borderBottomWidth:3
    },
    textTitle:{
        color:COLORS.white,
        fontWeight:'bold',
        maxWidth:120,
        backgroundColor:COLORS.layoutText,
        height:'100%',
        lineHeight:30,
        textAlign:'center'
    },
    boxProduct:{
        flex:1,
        padding:5
    }
    
})
export default styles