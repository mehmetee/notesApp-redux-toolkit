import React from "react";
import { View,Image,TouchableOpacity,Text } from "react-native";
import styles from "./ButtonColor.styles";

export default function ButtonColor({bgColor,onPress,isVisible}){
    return(
        <View style={styles.constainer}>
            <TouchableOpacity 
            onPress={onPress}
            style={[styles.button,{backgroundColor:bgColor}]}>
                {isVisible && <Image 
                source={require('../../images/tick.png')}
                style={styles.images}
                />}
            </TouchableOpacity> 
        </View>
    )
}