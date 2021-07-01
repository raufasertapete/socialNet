
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { API_getPosts ,API_uploadPosts} from '../API/API';


const initialState = { posts :[] , draft : {text:""}}; 

const getPosts= createAsyncThunk(
    'post/getPosts',
    async() => {
        const response = await API_getPosts();
        return response;
    })

const uploadPost = createAsyncThunk(
    'post/uploadPost',
    async(args,thunkAPI) => {
        console.log(args)
        console.log(thunkAPI.getState())
        const response = await API_uploadPosts(thunkAPI.getState());
        return response;
    })



export const postSlice = createSlice({
    name:'post',
    initialState,//
    reducers: { 
        setText(state,action) {
            state.draft.text = action.payload;
            return state;
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: (state,action) => {

            state.posts = action.payload;
        },
        [uploadPost.fulfilled]: (state,action) => {

            state.posts = action.payload;
        },   
         
    },
})

export const selectPostinformation = ( Payload ) => Payload.posts

export  {getPosts,uploadPost};
export const {setText} = postSlice.actions;
export default postSlice.reducer;