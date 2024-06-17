import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const home = createAsyncThunk(
    'home/valeue',
    async(_,{rejectWithValue})=>{
        try{

        }catch{

        }
    }
)


export const Reduxslice = createSlice({
    name:'project',
    initialState:{
        name:'',
        email:''
    },
    reducers:{
        nameValue:(state,action)=>{
            state.name= action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(home.pending,(state)=>{

        })
    }
})

export const {nameValue} = Reduxslice.actions
export default Reduxslice.reducer