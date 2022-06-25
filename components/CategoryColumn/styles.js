import {StyleSheet, Dimensions} from 'react-native'
import {COLORS} from '../../contains'
const height = Dimensions.get('window').height - 330

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: height/2,
        marginTop:15
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
    box:{
        flex:1
    }
})

export default styles;