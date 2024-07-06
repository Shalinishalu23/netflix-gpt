import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch : false
    },
    reducers:{
        toggleGptSearchView : (state, action) =>{
            console.log('state: ', state.showGptSearch);
            state.showGptSearch = ! state.showGptSearch
        }
    }
})

export const {toggleGptSearchView} = gptSlice.actions

export default gptSlice.reducer