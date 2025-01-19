import { FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constants'
import CurrncyButton from './components/CurrncyButton'
import Snackbar from "react-native-snackbar"

type Currency = {
  name: string
  value: number
  symbol: string
}

export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [targetCurrency, setTargetCurrency] = useState("")
  const [resultValue, setResultValue] = useState("")

  const buttonPressed = (targetValue: Currency) => {
    if(!inputValue) {
      return Snackbar.show({
        text: "Enter a Value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000",
      })
    }

    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a Valid number to Convert",
        backgroundColor: "#F4BE52",
        textColor: "#000000",
      })
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2C3E50" barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Currency Converter</Text>
      </View>
      
      <View style={styles.converterContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount in USD</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.currencySymbol}>$</Text>
            <TextInput 
              maxLength={14}
              value={inputValue}
              clearButtonMode='always'
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter amount'
              placeholderTextColor="#666"
              style={styles.input}
            />
          </View>
        </View>

        {resultValue && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Converted Amount</Text>
            <Text style={styles.resultValue}>{resultValue}</Text>
            <Text style={styles.targetCurrency}>{targetCurrency}</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <Text style={styles.currencyLabel}>Select Target Currency</Text>
        <FlatList 
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          contentContainerStyle={styles.buttonList}
          renderItem={({item}) => (
            <Pressable
              style={[styles.button, targetCurrency === item.name && styles.selected]}
              onPress={() => buttonPressed(item)}
            >
              <CurrncyButton {...item} />
            </Pressable>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
  },
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#34495E",
  },
  headerText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  converterContainer: {
    padding: 20,
    backgroundColor: "#34495E",
    borderRadius: 15,
    margin: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#BDC3C7",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  currencySymbol: {
    fontSize: 20,
    color: "#2C3E50",
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    color: "#2C3E50",
  },
  resultContainer: {
    alignItems: "center",
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#465C74",
  },
  resultLabel: {
    fontSize: 16,
    color: "#BDC3C7",
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 4,
  },
  targetCurrency: {
    fontSize: 16,
    color: "#3498DB",
  },
  buttonsContainer: {
    flex: 1,
    padding: 16,
  },
  currencyLabel: {
    fontSize: 16,
    color: "#BDC3C7",
    marginBottom: 12,
    marginLeft: 4,
  },
  buttonList: {
    paddingBottom: 16,
  },
  button: {
    flex: 1,
    margin: 8,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  selected: {
    backgroundColor: "#3498DB",
  },
})