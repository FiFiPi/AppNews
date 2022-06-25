import React, {useState, useEffect} from 'react'
import { View, Text, Switch } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { set } from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux'
import {SettingHome} from '../../store/slices/setting'
import {COLORS, SELECT_STYLES} from '../../contains'
import styles from './styles'

const CategorySetting = ({data}) => {
    const [isSwichOn, setIsSwitchOn] = useState(false)
    const [valueCheck, setValueCheck] = useState()
    const settingData = useSelector(state => state.Setting.home)
    const item = settingData.find(item => item.id == data.id)
    const dispatch = useDispatch()

    useEffect(() => {
        item?.status && setIsSwitchOn(true)
        setValueCheck(item?.type)
    }, [])

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwichOn)
        dispatch(SettingHome({
            id    : data.id,
            type  : valueCheck,
            status: !isSwichOn
        }))
    }

    const checkValue = (value) => {
        if(value){
            setValueCheck(value)
            dispatch(SettingHome({
                id      : data.id,
                type    : value,
                status  : isSwichOn
            }))
        }
    }
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{data.name}</Text>
            <RNPickerSelect 
                style={{
                    inputIOS : styles.inputIOS,
                    inputAndroid : styles.inputAndroid
                }}
                Icon={()=><View/>}
                onValueChange={(value)=>checkValue(value)}
                items={SELECT_STYLES.option}
                useNativeAndroidPickerStyle={false}
                value={valueCheck}
                placeholder={SELECT_STYLES.default}              
            />
            <Switch 
                value={isSwichOn}
                onValueChange={onToggleSwitch}
                color={COLORS.primary}               
            />
        </View>
    )
}
export default CategorySetting
