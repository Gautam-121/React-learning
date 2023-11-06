import React from "react"
import  ReactDOM  from "react-dom/client"
import "./index.css"
import PractiseState from "./componets/PracticeState"

const parent1 = React.createElement("div" , {id : "parent1"} , [
    React.createElement("p" , {id : "child1"} , "This is Child1"),
    React.createElement("p" , {id : "child2"} , "This is Child2")
])

const parent2 = React.createElement("div" , {id : "parent2"} , [
    React.createElement("p" , {id : "child3"} , "This is Child3"),
    React.createElement("p" , {id : "child4"} , "This is Child4")
])

//Defining a react Element
const header = React.createElement("div" , {id:"wrapper"} , [
    parent1,
    parent2
])

//Defining a Jsx
const headingFromJsx = (
       <div>
            <h1 className="head">This is Header From jsx</h1>
            <p>This is Para from jsx</p>
       </div>
)

//Defining a React Component
const HeadingComponent = ({name , age })=>{

    return (
        <div> 
            This is HeaderComponent JSX by {name} {age} 
        </div>
    )
}


const roots = ReactDOM.createRoot(document.getElementById("root"))

console.log(roots)

const datas = [
    {
        id : 1,
        name : "Guatam",
        age : "23"
    },
    {
        id : 2,
        name : "Sandhya",
        age : "24"
    },
    {
        id : 3,
        name : "Rohit",
        age : "27"
    }
]

const Applayout = ()=>{
    return(
       <>
           {
            datas.map(data=>(
                <HeadingComponent key={data.id} {...data}/>
            ))
           }
       </>
    )
}

// roots.render(HeadingComponent())
roots.render(<PractiseState/>)
// roots.render(<HeadingComponent></HeadingComponent>)