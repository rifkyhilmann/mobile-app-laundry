import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { splashBg, logo } from '../../assets'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
        }, 3000)
    })

  return (
    <ImageBackground 
      source={splashBg}
      className='flex-1 items-center justify-center'
    > 
      <Image 
        source={logo} 
        className='w-[222px] h-[105px]'
      />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({})