# WE see how we can handle data using Redux , Redux is Not mandotary thing , used Widely onle when you required

When you create small app or medium size application its not neccessary to use Redux

# Redux and React is different library

# What is React 
- A predicatable state container for js apps

# What is a Redux-store


# Why we used Redux ?
 - When you create A large Application , Redux offers a great solution for it , handling data managing your store , there are other library also they also do the same thing like zustand , recoil

 - Redux offers Easy Dubugging , just like we have react dev tool  , same we have redux toolkit with use that makes easier to dubugging

 # There Are two libraries rhat redux team offers?
  1) React-Redux -> is Kind a briadge between react and redux
  2) Redux-toolkit -> is The newer way of writing Redux

  We will be using Redux-toolKit , is the new way to writing and implementing Redux and React-redux which acts as a bridge that fill the gap between react and redux

# There are 3 major concern with redux that redux-toolkit solve
 1) Configuring a Redux store is too complicated
 2) i have to add lot of packages to get Redux to do anything usefull
 3) Redux require to much boilaplate code

We will be using Redux - For managing the data of our application

# What is a Redux-store
 - Redux-Store is nothing but big whole object and it is kept in central global space

 ____________________________
|  Logo             cart - 3 |                
|                            |
|         Add   item +       |
|                            |
|         Add   item         |
|                            |
|         Add   item +       |
|                            |
|         Add   item         |
|                            |
|         Add   item   +     |
|                            |
|                            |
|____________________________|

    This is Redux-store that kept place in central global place , any component can access it , it can write data or read data from that store we keep most of major data in that store
 ____________________________
|                            |                
|                            |
|     |             |        |
|     | card Slice  |        |
|     |_____________|        |
|                            |
|                            |
|     |             |        |
|     | logged Slice|        |
|     |_____________|        |
|                            |
|                            |
|     |             |        |
|     | card Slice  |        |
|     |_____________|        |
|                            |
|                            |
|                            |
|____________________________|


is it the good way to store all the data inside it , there is absolutely fine to store all the data inside it , but so that our redux store so big very clumsy , we will store something known as slices inside it

slices -> slice is nothing but small portion of a redux store , and we will create multiple slice inside it

# but why would we need this slices and what are the slices actually ?
 - we wnat to store restarentData inside our resdux store , so we will create restarent-Slice inside it
 - if we want to store loged in info inside it , so we will create loggedIn-slice inside it

# Redux say that you can't modified directly your slice , but there is a way through which you can modified your slices

- When you click add Btn --> it dispatch an action -->   call the reducer function --> and this reducer function Modified or update the slice of this redux store and then the slices will be updated  (This is Way you can write data)

# But what is this function actually --> this function we called as reducers

# But if you want to read data , How to read data from this cart slices
- For that we used something known as selector , we will used selector to read data from store and this selector modified are react component and this phenomenon is known as subscibing to the store.

- As soon as my store or slice modified , react will automatically or automagically updated my component and refleted with updated store slice value

# Redux-Toolkit(RTK)
Install - @reduxjs/toolkit -- creating a store , creating slice is job of RTK
and react-redux -- acts as bridge providing store to our application is the job of react-redux

1) 1-Step Build A Store
2) Connect our Store To Our App
3) Creating a Slices
4) dispatch(action)
5) selector

# 1-Step Build A Store

- First we will configrating a Store for that we will use configureStore , and this configureStore comes from toolkit

- How can i add slices to my store

import cartReducer from "./cartSlice

const appStore = configureStore({
  reducer : {
    cart : cartReducer
  }
})


# This big app have it store reducer and this reducer contain all slice Reducer

export default appStore

# 2-Step Add This store to Our Application

so,how we will provided store to our application , for that we need something known as Provider and Provider that comes from react-redux

import {Provider} from "react-redux"
import appStore from "..utils/appStore"

# How to provide this store to Our , simply  we wrapped  whole our application in that Provider and we passed this store as props to this Provider

const AppLayout = ()=>{
  return(
    <Provider store={appStore}>
      <div>
        <Header>
        <Outlet>
        <Footer>
      <div>
    <Provider>
  )
}

# Step-3 Creating a Slices

- We will use createSlice function for creating a slice and it come from RTK , createSlice is a function and it take configration to create a slice

- It take first configration is name of slice ( name :: cart)
- It take second configration is initialState of cart Slice (initialState : {items : []})
- It take third configration is reducer function , we will write reducer function corrosponding to that perticular action , reducer is also an object , it take different type of action , but what type of action

- You can add a Item , remove a Item ,

# This is addItem is an action and ()=>{} this is a reducer function map to that action , this reducer function actually modified the data inside it or slice of your store

This reducer fuction have access to the state and action  (state , action)=>{} , and it modified the state based on action

- We will export two thing from it 
  1) we will export our action
  2) we will export our reducer

import {createSlice} from "@redux/toolkit"

const cartSlice = createSlice({

  name : "cart" // name of slice
  initialState : {
    items : ["Burger","Pizza"]
  },
  reducer:{
    
    // We are Mutating a  state as here
    addItem : (state , action)=>{
      state.items.push(action.payload)
    },
    removeItem : (state , action)=>{
      state.items.pop()
    },
    clearCart : (state)=>{
      state.items.length = 0 // []
    }
  }
})

# cartSlice return an Object that two filed contain one is action and one is reducer

{
  actions:{
    addItem , removeItem , clearCart
  },
  reducer
}

export default cartSlice.reducer //This way export our reducer

export const {addItem , removeItem , clearCart} = cartSlice.actions //This way export our action

# How we read the data from the store for that we subcribing to the store using a selector

for accessing a data from store we used hooks and this hook known as useSelector and this hook come from my react-redux , this hooks give access to my store

// We are Subscribing to the store using a selector

 - we will use small portion of that store i dont want to this user and other part , i want only items part from that store

 const cartItem = useSelector((store)=>store.cart.items) -- This cart get data from that item cart

 console.log(cartItem) -- this way you read data from the store

 # How To Write Data to Store 

 - Just we have useSelector to read , for dispatching we have a hook that hook is useDispatch and it come from "react-redux

 when click a btn --> we want to dispatches an action --> which action i wnat to add so perform addItem action

 import {addItem} from "./utils/cartSlice"

 const Item = ()=>{

  const dispatch = useDispatch()

  const handleItem = ()=>{
    dispatch(addItem("Gobhi"))
  
  - What redux do behind the seen , basically it create object , and passes this object as second argument in addItem action
  {
    payload : "Gobhi"
  }

  }

  return(
    <button onClick={handledItem}>Click<button> // if you not passed any argument from it used this way
    <button onClick={()=>handledItem(item)}>Click<button> // if you passed something as argument used this
    <button onClick={handledItem(item)}>Click<button> //Not work , when passed a argument from it
  )
 }


1) # Whenever you used useSelector must select right portion of the store otherwise it has lot of perform loss

- const cartItem = useSelector((store)=>store.cart.items) // Good way to subscribing to perticular part of store

- This is Very less Efficient -- what happen you want to if you update the cartSlice only portion of cartSlice update it not affect on whole store , but in this case if you updated any slice it will update whole store so it has less efficient
 const store = useSelector((store)=>store) // Is not good way to subscribing to store , using this it has lot of perform loss
 const cartItem = store.cart.items

2) There are lot of confusion in reducer , reducers

- So whenever you building a appStore , The keyword is known as reducer and this reducer have multiple small reducers

const appStore = configureStore({
  reducer:{
    cart : CartSlice,
    user : userSlice,
    restaurent : restaurentSlice
  }
})

- but when we are creating slice we are creating multiple reducers and whenever you are exporting , you are exporting one reducer from it

- what is reducer at the end of the day -- reducer is nothing but combination of different small reducers

const cartSlice = createSlice({
  name : "cart",
  initialState : {
    items : []
  },
  reducers : {
    addItem : ()=>{

    },
    removeItem : ()=>{
      
    },
    clearCart : ()=>{
      
    }
  }
})

export defauct cartSlice.reducer
export const {addItem , removeItem , clearCart} = cartSlice.actions

3) whenever you write earlier redux using vanilla redux , redux its shout to there website and it gives you clear warning "Don't mutate the state"

- Earlier we write redux we never modified the state , so however we write the logic
    
    - we use to create new state earlier from my state and then i modified my new state
    and then we return the newState

    const newState = [...state]
    newState.items.push(action.payload)
    return newState

  - We do earlier this thing , because redux say don't modified the state

  reducers : {
        addItem : (state , action)=>{

      -  Vaniala(older) Redux ==>  Don't Mutate The State

      -  we use to create new state earlier from my state and then i modified my new state
        and then we return the newState

        const newState = [...state]
        newState.items.push(action.payload)
        return newState

      -  We do earlier this thing and returning is kind of mandatory , because redux say don't modified the state

      -  In New Redux (ReduxToolKit) --> We have to mutate the state and return is also not mandatory


      -  When are mutating the state right here , what does redux do behind the seen , redux do all the thing behind
        the seen in vanilla redux do by developer

        const newState = [...state]
        newState.items.push(action.payload)
        return newState

      -  behind the seen right now redux doing like this , and redux uses something know as immer library to do this 

      -  basically immer library something like finding the difference between original state and the mutating  state
        and gives you back a new state which is immutatble state which is a new copy of a state

       
            state.items.push(action.payload)
        },
  }

# Redux gives very good dubugging tool called Redux-toolkit , it help us to debugging our redux store 

# Howemork - Read about RTK query (earlier we have middleware and Thunk) No we have RTK query read the RTK query
