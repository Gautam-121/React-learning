import { createSlice } from "@reduxjs/toolkit";

const restaurentSlice = createSlice({
    name : "restaurent",
    initialState : {
        restaurent : []
    },
    reducers : {
        replaceRestaurent : (state , action)=>{
            state.restaurent = action.payload
        }
    }
})


export const {replaceRestaurent} = restaurentSlice.actions
export default restaurentSlice.reducer