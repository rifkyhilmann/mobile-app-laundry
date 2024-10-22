import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconAddSaldo, IconEkspress, IconGetPoint, IconKarpet, IconKiloan, IconSatuan, IconSetrika, IconVIP } from '../../assets'

const ButtonIcon = ({title, type}) => {
    const Icon = () => {
        if(title === "Add Saldo") return <IconAddSaldo />
        if(title === "Get Point") return <IconGetPoint />
        if(title === "Kiloan") return <IconKiloan />
        if(title === "Satuan") return <IconSatuan />
        if(title === "Vip") return <IconVIP />
        if(title === "Karpet") return <IconKarpet />
        if(title === "Setrika Saja") return <IconSetrika />
        if(title === "Express") return <IconEkspress />
        return <IconAddSaldo />
    }

    return (
        <TouchableOpacity style={styles.container(type)} >
            <View style={styles.button(type)} className='bg-primary  rounded-lg flex justify-center'>
                <Icon />
            </View>
            <Text className={`text-black ${type === "Layanan" ? 'text-[12px] ' : 'text-[8px]'} font-poppins text-center`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container : (type) => ({
        marginBottom : 12,
        marginRight : type === "Layanan" ?30 : 0,
    }), 
    button : (type) => ({
        padding: type === "layanan" ? 20 : 7,
    }),
})