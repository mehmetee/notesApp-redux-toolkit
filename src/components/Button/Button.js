import React from "react";
import { TouchableOpacity,Text,View } from "react-native";
import styles from "./buttonStyles";

export default function Button({onPress}){
    return(
            <TouchableOpacity 
            onPress={onPress}
            style={styles.button}>
                <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
    )
}