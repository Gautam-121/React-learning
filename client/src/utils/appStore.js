import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import restaurentSlice from "./restaurentSlice"

const appStore = configureStore({
    reducer : {
        cart : cartSlice,
        restaurent : restaurentSlice
    }
})

export default appStore
