import React from "react";
import { View,TextInput } from "react-native";
import styles from "./TextInputStyles";

export default function({value,onChangeText}){
    return(
        <View style={styles.constainer}>
            <TextInput
            placeholder="Enter your note here..."
            value={value}
            onChangeText={onChangeText}
            style={styles.textInput}
            />
        </View>
    )
}