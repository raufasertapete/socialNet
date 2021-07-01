
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { API_login, API_signUp } from '../API/API';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const initialState = { name: "",firstname:"", uid:0,logged_in:false,email: "",password:"",apiKey:0};

const getlogin = createAsyncThunk(
    'login/getlogin',
    async(args,thunkAPI) => {
        console.log(args)
        console.log(thunkAPI.getState())
        const response = await API_login(thunkAPI.getState());//Login(thunkAPI.getState());
        return response;
    })

const createsignUp = createAsyncThunk(
    'login/createsignUp',
    async(args,thunkAPI) => {
        console.log(args)
        console.log(thunkAPI.getState())
        const response = await API_signUp(thunkAPI.getState());//Login(thunkAPI.getState());
            return response;
    })

export const LoginSlice = createSlice({
    name:'login',
    initialState,
    reducers: { 
        setEmail(state,action) {
            state.email = action.payload;
            return state;
        },
        setPassword(state,action) {
            state.password = action.payload;
            return state;
        },
        setName(state,action) {
            state.name = action.payload;
            return state;
        },
        setFirstName(state,action) {
            state.firstname = action.payload;
            return state;
        }


    },
    extraReducers: {
        [getlogin.fulfilled]: (state,action) => {
            state.name = action.payload.name;
            state.firstname = action.payload.firstname;
            state.uid = action.payload.uid;
            state.logged_in = true;
        },  
        [createsignUp.fulfilled]: (state) => {
            state.name = "";
            state.firstname = "";
            state.uid = 0;
            state.email = "";
            state.password = "";
            state.logged_in = false;
        }, 
    },
})

export const selectLogininformation = ( Payload ) => Payload.login
export  {getlogin,createsignUp};
export const {setEmail,setPassword,setName,setFirstName} = LoginSlice.actions;
export default LoginSlice.reducer;