import React from "react"
import  ReactDOM  from "react-dom/client"
import "./index.css"
import Home from "./component/home"
import About from "./component/about"
import Skill from "./component/skill"
import { createBrowserRouter , RouterProvider   } from "react-router-dom"
import SignIn from "./component/signIn"

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
const HeadingComponent = ()=>{
    return (
        <div> This is HeaderComponent JSX </div>
    )
}

const Header = ()=> {
    return <h1 className="heading">This is Header</h1>
}

const Header1 = ()=> (
     <h1 className="heading">This is Header</h1>
)

const Container = ()=>(
    <div>
        <Header/>
        <Header1/>
        <div className="conta_child_3">Component Composition</div>
        {headingFromJsx}
        {"Put Any Js Code inside Jsx Using curly Braces" + 200 + 300}
        {console.log("Console inside from The Container")}
    </div>
)

const userRouting = createBrowserRouter([
    {
        path : "/",
        element : <HeadingComponent/>,
        children : [
            {
                path : "/home",
                element : <Home/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/skill",
                element : <Skill/>
            }
        ]
    }
])


const roots = ReactDOM.createRoot(document.getElementById("root"))

// roots.render(HeadingComponent())
// roots.render(<RouterProvider router={userRouting}/>)
roots.render(<SignIn/>)
// roots.render(headingFromJsx)
// roots.render(<HeadingComponent></HeadingComponent>)