# what is different export and Import of components Name and default

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

# What is React Hooks
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

        ()->res-container
() () () () () () () () () () 10 res-cards

Now my Ui Changes to filtering this 10 res-cards to 5 res-cards
         () res-container
    ()  ()  ()  ()  () 5 res-cards

what react do , and why react is fast no i explain?

whenever you have the 10 restarent Ui right  , react create (Virtual dom) of its , but what is the virtual dom?

what is Actual Dom  ? --> actual dom is tree like representation of our html file

# What is Virtual Dom
Virtual dom is representation og actual dom , what is mrant by representation ? 
Virtual Dom is nothing but normal javascript Object or object representation of actual dom

# what is the diff algorithm?
diff algorithm finding out the difference betwwn two virtual dom the updated virtual dom and previous virtual dom and then it calculate the difference and actually update the dom on every render cycle

# why react is fast ?
because React do efficient dom manupulation
that the reason react is fast

# What us Reconcillation in React?


# What is React-fiber

# What is the importance of config.js file
- For the best practise never-ever add at any component as direct value any static value of js store in config.js file export the value and used at there postion

# Why do we need a useState Hook?
- Basically useState hook is a state variable , normal js variable not track by react whenever we change normal js variable it not triggen diff alogirtm and our component not re-rendered so not effect on Ui

but React keep tract on state varible , whenever state variable cahnges react trigger the diff algorithm it find diff between new virtual dom and old virtual dom and re-render the component and make cahnge in actual dom , thats a reason w need useState hook for mananging a State

