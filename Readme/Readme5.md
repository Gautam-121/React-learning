# export and Import of components

There are Two ways to import and Export
1) default export -- When you default export you can import as same name or any name , and one file that contain one default export and many name export
2) named export -- When you export named you can import as the same name as export name

example-> default export Header

import Header from "./header.js
or
import header from "./header.js

export const data = {} -- name export

export const constant = {} -- name export

import {data , constant} from "../utils/extraa.js" ---> name import

# Wheneever any hardcoded data newer-ever keep in component file

# Can we do default export with named export ?

# We have Say React is Fast
 - React is Fast In dom-manipulation (this is the exaxt problem that react is solving)

 State Variable - Super PowerFull Variable

 Normal Variable 

 let resList = [
    {
        name : "KFC",
        avgRating : 4.5,
    },
    {
        name : "Macdee",
        avgRating : 3.2,
    },
    {
        name : "Dominose",
        avgRating : 4.1,
    },
    {
        name : "Burger King",
        avgRating : 4,
    }
 ]

Initially It Render All All resList ,
when i click the button, i want all restList that rating > 4 , only this resList then seen my Ui

But Normal Javascript Variable , React not track on it and it not-rerender the component and thats why we not seen any changes on dom and Ui
<button onClick={()=>{
    restList = resList.filter((res)=>res.avgRating > 4)
}}>Top Rated Res</button>

resList.map((res)=>(
    <RestarentCart {...res}>
))

so , for resolving this problem react Hookes cames into the picture , react used useSate hook is a state variable , react track on it and the state Varible hook changes it re-renderd the component and trigger diff algorithm

but the diff algorithm not trigger by Normal Javascript Variable

basically diff algorithm finding diff between old virtual doma nd new virtual dom after finding the diff between them , it will changes only that node not in dom withouth teaching the other part

# React Hooks
- Normal Js utility fuction
 - There are Two most importanlly used Hooks
 1) useState() --> gives you superpowerfull react variable
 2) useEffect()

 import {useState} from "react"

 const listOfRestarent = useState([])

 const restarent =  listOfRestarent[0]
 const setOfRestarent = listOfRestarent[1]

 or

 const [restarent , setRestarent] = useState([])

 useState return array in witc the 0-index value represent the default value that give in useState and 1-index value represent the superPowerFull javascript function that trigger your reconcialliation algorithm

# How can update my restarent by calling setRestarent

<button onClick={()=>{
     const restList = resList.filter((res)=>res.avgRating > 4)
     setRestarent(resList) 
}}
>Top Rated Restaurent</button>

# Whenever a state variable changes react will re-rendered my component

# React will makes this dom operation super-fast and efficient , React only good in dom-operation

- React uses something know as reconsiallition algorithm and this reconsialliation algorithm also know as react-fiber

