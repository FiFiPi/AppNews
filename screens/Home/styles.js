import {StyleSheet, Dimensions} from 'react-native'
import {COLORS} from '../../contains'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.backgroundSetting,
        paddingHorizontal:20,      
    },
    boxTop:{
        
    },
    boxBot:{
        flex:2,
        flexDirection:'row',   
    },

    boxTitleBot:{
        marginTop:30
    },
})
export default styles;