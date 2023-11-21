import { createSlice , current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : ["pizza" , "Burger"]
    },
    reducers : {
        addItem : (state , action)=>{
        /*

        Vaniala(older) Redux ==>  Don't Mutate The State

        we use to create new state earlier from my state and then i modified my new state
        and then we return the newState

        const newState = [...state]
        newState.items.push(action.payload)
        return newState

        We do earlier this thing and returning is kind of mandatory , because redux say don't modified the state

        In New Redux (ReduxToolKit) --> We have to mutate the state and return is also not mandatory

        */

        /*

        When are mutating the state right here , what does redux do behind the seen , redux do all the thing behind
        the seen in vanilla redux do by developer

        const newState = [...state]
        newState.items.push(action.payload)
        return newState

        behind the seen right now redux doing like this , and redux uses something know as immer library to do this 

        basically immer library something like finding the difference between original state and the mutating  state
        and gives you back a new state which is immutatble state which is a new copy of a state


        */
       
            state.items.push(action.payload)
        },
        removeItem : (state) =>{
            state.items.pop()
        },

        // originalState = {items : ["Pizza" , "Burger"] }
        clearItem : (state)=>{
            console.log(current(state)) //This is way you see redux state in console in normal
            // if you do this console.log(state) it show proxyObject
            state = []
            console.log(state)
        /*
        it Not Work
        state = []
        it updataed your local state variable but not the global state varible so , if you 
        see cart-2 it not change because you change only local state not the global state

        so if you want to change global state do this way

        RTK Says - either Mutate the existing state or return a new state
        
        state.items.length = 0

        or 

        return {items : []} //orignalState = []

        */
            state.items.length = 0
        }
    }
})

export const {addItem , removeItem , clearItem} = cartSlice.actions

export default cartSlice.reducer