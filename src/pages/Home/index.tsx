import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { header, logo } from '../../assets'
import Saldo from '../../components/Saldo'
import ButtonIcon from '../../components/ButtonIcon'
import PesananAktif from '../../components/PesananAktif'

const Home = () => {
    return (
        <View className="flex-1 bg-white  ">
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground 
                    // className='h-[200px]'
                    style={styles.header}
                    source={header}
                >
                    <Image 
                        style={styles.logo}
                        source={logo} 
                    />
                    <View style={styles.hello}>
                        <Text className='text-[20px] text-black font-poppins'>Selamat Datang, </Text>
                        <Text className='text-[17px] text-black font-poppins font-bold' >rifky hilman </Text>
                    </View>
                </ImageBackground>
                <Saldo />
                <View className='pl-[30px] pt-[10px]'> 
                    <Text className='text-black font-poppins text-[18px] font-bold'>Layanan Kami</Text>
                    <View className=' flex-row justify-between mt-[10px] flex-wrap'>
                        <ButtonIcon
                            title="Kiloan"
                            type="Layanan"
                        />
                        <ButtonIcon
                            title="Satuan"
                            type="Layanan"
                        />
                        <ButtonIcon
                            title="Vip"
                            type="Layanan"
                        />
                        <ButtonIcon
                            title="Karpet"
                            type="Layanan"
                        />
                        <ButtonIcon
                            title="Setrika Saja"
                            type="Layanan"
                        />
                        <ButtonIcon
                            title="Express"
                            type="Layanan"
                        />
                        
                    </View>
                </View>
                <View className='px-[30px] pt-[10px] bg-gray-100 flex-1 rounded-t-3xl'> 
                    <Text className='text-black font-poppins text-[18px] font-bold pt-2'>Pesanan Aktif</Text>
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
                    <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci"/>
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const windwWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    header: {
        width: windwWidth,
        height : windowHeight*0.30,
        paddingTop: 10,
        paddingHorizontal : 20,
    },
    logo : {
        width: windwWidth*0.27,
        height : windowHeight*0.06
    },
    hello : {
        marginTop: windowHeight*0.03,
    }
})