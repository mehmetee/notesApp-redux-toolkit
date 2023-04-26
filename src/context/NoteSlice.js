import { createSlice } from "@reduxjs/toolkit";


export const NotesSlice=createSlice({
    name :'notes',
    initialState:{
        noteList:[],
    },
    reducers:{
        add:(state,action)=>{
            state.noteList.push(action.payload)
        },
        remove:(state,action)=>{
            const id=action.payload
            const filtered=state.noteList.filter(state=>state.id!==id)
            state.noteList=filtered
        }
    }
})

export const {add,toggle,remove}=NotesSlice.actions;
export default NotesSlice.reducer