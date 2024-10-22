import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive } from '../../assets/icons'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <IconHomeActive /> : <IconHome /> 
        if (label === "Pesanan") return isFocused ? <IconPesananActive /> : <IconPesanan /> 
        if (label === "Akun") return isFocused ? <IconAkunActive /> : <IconAkun />
        return <IconHome /> 
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            className='items-center '
            >
            <Icon />
            <Text 
                className={`text-[13px] ${isFocused ? 'text-focused' : 'text-isFocused'} mt-[8px]`}
            >
            {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({})