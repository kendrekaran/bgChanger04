import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function App() {

  const [randomBackground,setRandomBackground] = useState("#FFFFFF")
  const generateColor = () =>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()* 16)]
    }
    setRandomBackground(color)
  } 
  return (
    <View style={[styles.container, {backgroundColor: randomBackground}]}>
      <StatusBar backgroundColor={randomBackground} barStyle="light-content" />
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  actionBtnTxt: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
