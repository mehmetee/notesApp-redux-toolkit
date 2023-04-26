import { configureStore } from "@reduxjs/toolkit";
import  NotesSlice  from "./NoteSlice";

export const store =configureStore({
    reducer:{
        notes:NotesSlice
    }
})