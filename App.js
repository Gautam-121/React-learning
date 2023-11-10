import React from "react"
import  ReactDOM  from "react-dom/client"
import "./index.css"
import Home from "./component/home"
import About from "./component/about"
import Skill from "./component/skill"
import { createBrowserRouter , RouterProvider   } from "react-router-dom"
import SignIn from "./component/signIn/signIn"
import Header from "./component/header/header"


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
const HeadingComponent = (props)=>{

    const {name , age} = props
    return (
        <div> 
            This is {props.name} {props.age} HeaderComponent JSX by {name} {age} 
        </div>
    )
}

const Header = ()=> {
    return <h1 className="heading">This is Header</h1>
}

const Header1 = ()=> (
     <h1 className="heading">This is Header</h1>
)

const data = {
    name : "XYZ",
    age : "23",
    gender : function(){
        if(this.name === "Male Name") return "Male"
        else if(this.name === "Female Name") return "Female"
        else return "TransGender"
    },
}

const Container = ()=>(
    <div>
        <Header/>
        <Header1/>
        <HeadingComponent name={"Gautam"} age={"22"}/>
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
roots.render(<SignIn/>)
// roots.render(<HeadingComponent></HeadingComponent>)