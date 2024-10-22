import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonIcon from '../ButtonIcon'

const Saldo = () => {
    return (
        <View 
            style={styles.container}
            className=' p-[16px] mx-[30px] rounded-xl  flex-row bg-white  '>
            <View className='w-[60%] '>
                <View className='flex flex-row justify-between'>
                    <Text className='text-black font-poppins text-md'>Saldo : </Text>
                    <Text className='text-black font-poppins text-sm font-bold'>Rp.100.000</Text>
                </View>
                <View className='flex flex-row gap-2 justify-between'>
                    <Text className='text-black font-poppins text-md'>Antar Point : </Text>
                    <Text className='text-green-500 font-bold font-poppins text-xs'>100 Point</Text>
                </View>
            </View>
            <View className='flex-row ml-[14px] justify-between flex-1'>
                <ButtonIcon 
                    title="Add Saldo"
                />
                <ButtonIcon 
                    title="Get Point"
                />
            </View>
        </View>
    )
}

export default Saldo

const windwWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container : {
        marginTop : -windowHeight*0.07,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
})