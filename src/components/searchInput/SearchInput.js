import React from "react";
import { View,TextInput } from "react-native";
import styles from "./searchStyles";

export default function SearchInput({value,onChangeText}){
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder="Search..." 
            value={value}
            onChangeText={onChangeText}
            style={styles.input} />
        </View>
    )
}
