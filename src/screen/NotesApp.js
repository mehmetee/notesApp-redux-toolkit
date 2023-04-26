import React, { useState } from "react";
import { SafeAreaView,View,Text,ScrollView, Alert,TouchableOpacity,StatusBar  } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import styles from "./styles";
import SearchInput from "../components/searchInput";
import TextInput from "../components/textInput/TextInput";
import ButtonColor from "../components/ButtonColor/ButtonColor";
import Button from "../components/Button/Button";
import { add, remove } from "../context/NoteSlice";

function NotesApp(){
    const dispatch=useDispatch();
    const noteList=useSelector(state=>state.notes.noteList)
    const [searchText,setSearchText]=useState('')
    const [text,setText]=useState('')
    const [tickVisibles, setTickVisibles] = useState([false, false, false, false, false]);
    const colors = ['#f06292', '#ba68c8', '#ffd54f', '#4fc3f7', '#aed581'];


   
    const filteredNotes = noteList.filter((note) => {
        return note.text.toLowerCase().includes(searchText.toLowerCase());
    });
    return(
        <SafeAreaView style={styles.container} >
            <StatusBar/>
            {/*header Title */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>NotesApp</Text>
            </View>
            {/*Search Input */}
            <View style={styles.searchContainer}>
                <SearchInput 
                value={searchText}
                onChangeText={setSearchText}
                />
            </View>
                {searchText && 
                <View style={styles.searchFilteredGlobalContainer}>
                <ScrollView>
                    { filteredNotes.map((note) => (
                      <View key={note.id} style={styles.searcFiteredContainer}>
                        <Text>- {note.text}</Text>
                      </View>
                    ))}
                </ScrollView>
                </View>}
            <View style= {{flex:1}}>
            {/* Entery notes */}
            <View style={styles.notesInputConteiner}>
                <TextInput 
                value={text}
                onChangeText={setText}
                />
                <View style={styles.globalButtonContainer}>
                <View style={styles.colorButtonContainer}>
                  {colors.map((color, index) => (
                    <ButtonColor
                      key={index}
                      bgColor={color}
                      onPress={() =>  {
                        setTickVisibles(prevState =>
                          prevState.map((_, i) => i === index ? true : false)
                        );
                      }}
                      isVisible={tickVisibles[index]}
                      index={index}
                    />
                  ))}
                </View>
                    
                    <View style={styles.buttonContainer}>
                        <Button 
                         onPress={()=>{
                            if( text==''){
                                Alert.alert('Uyarı','İlgili alan bos bırakılamaz...')
                                return;
                            }else if( tickVisibles.includes(true)===false){
                                Alert.alert('Uyarı','Lütfen bir renk seçiniz...')
                                return;
                            }else{
                                dispatch(add({id:nanoid(),text,colorIndex: tickVisibles.indexOf(true)}))
                                setText('')
                            }  
                        }}
                        />
                    </View>
                </View>

            </View>
            {/* View notes */}
            <ScrollView>
                {noteList.map((items)=>
                    <TouchableOpacity 
                    key={items.id}
                    onPress={()=>dispatch(remove(items.id)) }
                    >
                <View style={[styles.notesViewContainer,{backgroundColor:colors[items.colorIndex]}]}>
                        <Text>{items.text}</Text>
                </View>
                    </TouchableOpacity>
                )}
            </ScrollView>
            </View>

            
        </SafeAreaView>
    )
}

export default NotesApp;