import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increament(state,action){
            state.count++
        },
        decreament(state,action){
            state.count--

        },
        reset(state,action){
            state.count=0
        },
        addValue(state,action){
            state.count+=action.payload
        }
    }
})

export default counterSlice.reducer
export const {increament,decreament,reset,addValue}=counterSlice.actions