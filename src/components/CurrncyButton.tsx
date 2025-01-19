import React from 'react'
import type { PropsWithChildren } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type CurrencyButtonprops = PropsWithChildren<{
    name: string
    flag: string
}>

const CurrncyButton = (props: CurrencyButtonprops) => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center"
    },
    flag:{
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 28,
        color: "blue",
        marginBottom: 4
    }
})

export default CurrncyButton
