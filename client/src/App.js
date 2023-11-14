import React from "react"
import  ReactDOM  from "react-dom/client"
import "../index.css"
import Header from "../src/component/header/header"
import Body from "./component/body/body"
import SignIn from "../src/component/signIn/signIn"


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



const roots = ReactDOM.createRoot(document.getElementById("root"))

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
         <Header/>
         <Body/>
       </>
    )
}

// roots.render(HeadingComponent())
roots.render(<Applayout/>)
// roots.render(<HeadingComponent></HeadingComponent>)