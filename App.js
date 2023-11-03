import React from "react"
import  ReactDOM  from "react-dom/client"

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
            <h1>This is Header From jsx</h1>
            <p>This is Para from jsx</p>
       </div>
)

//Defining a React Component
const HeadingComponent = ()=>{
    return(
        <>
           This is HeaderComponent JSX
        </>
    )
}


const roots = ReactDOM.createRoot(document.getElementById("root"))

roots.render(HeadingComponent())