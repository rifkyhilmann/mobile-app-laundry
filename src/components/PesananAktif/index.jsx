import React from 'react';
import {StyleSheet, Text,View, Dimensions, TouchableOpacity} from 'react-native';
import {IconPesananAktif} from '../../assets';

const PesananAktif = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesananAktif />
      <View style={styles.text}>
      <Text className='text-black font-poppins text-sm' style={styles.title}>{title}</Text>
      <Text className={`${status === "Sudah Selesai" ? 'text-green-500' : 'text-red-500'} font-poppins text-xs`} style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight*0.02,
    alignItems: 'center'
  },
  text: {
    marginLeft: windowWidth*0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
  status: (status) => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
  })
});