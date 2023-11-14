# Monolithic and Microservice Architecture

Traditionally the web App developed they developed using monolith architecture , earlier we have a huge big project and suppose we have building an application in the hole big project we have used to small pieces

This project itself has code where there api written , we have Ui code in the same project , we have auth code in same project , we have DB code in the same project , we have sending notification in the same project , even if we have to maje asingle change suppose i want to change the colour of button , what we was to do we was build the whole project , we have compile the whole project , we have deploy the whole project this is called monolithic architecture

But the era moving toward the Microservises acrchitecture , so what the microservices architecture?

So, In microservices architecture we have different services for different jobs , we have a service which has Backend service , we have a UI service , we have a Auth service , we have service for DB , we have services foe Email notification , this are services and microservices all this services combined together and form a big app. for each and small thing we have a different projects and this is known as seperation of concerns and single responsibbility principle it follows the single responcibbilty principle where each and every services has own jobs no one interfering with it


# When to make an api call
                          
                    we wii wait (5000ms) to load data
1) As soon As Page load --> make an api call ---> and when the get the data we have render on the Ui (suppose first 5000ms you not seen anything and suddenly ux appers this is the poor ux experience)

2) AS soon as Page load --> we will quickly render Ui we static data  --> After we will make an api call  --> as soon as we get the result from api call --> we will re-rendered our application with the new data (in react we will always used this approch because this gives a better ux)


# WE have UseEffect hooks 
hook is nothing but a normal javascript utility function that react gives to us where it has there own specific use-case where we used this thing

just like useState has purpouse of creating State-variable as useEffect have there own specific purpouse but what the purpose of the UseEffect?

useEffect(()=>{
console.log("UseEffect Called")
},[]) --> useEffect takes two argument 
1) is callback function
2) is Dependancy Array

# but question arises when my useEffect Hook called ?
it called after your component rendered , suppose your body component  rendered after completely render body component useEffect hooks called

The Purpose of useEffect if i want called anything after my initial component competely rendering we used useEffect

suppse my ui layer depend on backend data , first i was rendered my component with shimmer Ui after component rendered useEffect called we called Api to get the data as soon as we got the data , we re-rendered the component ui actual data 

fetch() ==> fetch is a superpower that given us by browser , given us by js engine , this fetch() , which fetch data from api

const data = fetch("http://localhost:8081/api/v1/getAllRestaurent) --> fetch return promises how we resolved promises using .then and .catch or using async and await we used async - await 

const fetchData = async()=>{
    const data = await fetch("http://localhost:8081/api/v1/getAllRestaurent)
    const json = await data.json()
    console.log(json)
}

# CORS --> Browser block the called one api to another api
- Our browser chrome not allowing to called api from localhost to swiggy 

# Unless we have a data insteat a rendering black page i want to render shimmer Ui This Loading Ui called as Shimmeer UI

# What is Shimmer Ui --> Shimmer Ui resembled the page as actual Ui , so User will Understand how quickly the web or mobile app load

# Conditional Rendering --> Rendered A component on the basis of condtion is called conditional Rendering

# How we have change const varible but it not give btnNameReact is constant variable

- When state variable changes it re-rendered the component and it not refresh the whole component it trigger the diff agorithm finding the difference between new vd and old vd and make changes on the perticular node it find difference

- basically it not give any error because of at each rendered the btnNameReact is new variable not the older variable and it contain the updated value

const Header = ()=>{
    const [btnNameReact , setBtnNameReact] = useState("Login")
    return(
        <div>This is Header {btnNameReact}</div>
    )
}

const [searchText , setSearchText] = useState("")
<input type="text" className="search-box" value={searchText}/>

we have bind with input value with state-variable , when we bind input value with
state-varible , when its presses key it not affect it not seen key press because i have strict my value of input box with state varible , so if i wnat to sho key press so i wnat to update my state-variable at each key press and bind my input value with updated state variable 

For resolving this issue , onChange event comes into the picture , it will update my state variable at each key press

<input type="text" className="search-box" value={searchBox} onChange=((e)=>{
    setSearchText(e.target.value)
})/>
When-ever you change the state-variable react will re-rendered the component ,
so at each key press my searchText state-variable change and it will re-rendered the component

# Whenever state variable update , react trigger reconcialliation cycle(re-render the component)

# What is Monolithic Architecture
- As the name suggest mono(means single) jang container in which whole application or system resides

- Advantages
  - Low Complexity
  - Easy To Deployed
 
- Disadvantages
   - Rigidness
   - Hard To Scale *
   - Slow Performance *
   - Single Point OF Failure *
   - Slow Continuous Developement

# What is Microservices Architecture
- As the name suggest it break your application into small small services and this services are very lossely coupled

- All Services are working independently because all this are microservices , this can be deployed seperatly and can be access through the API-GATEWAY

# WHAT IS  API-GATEWAY
- When client send a request it acts as a entry point , this entry point find what is the exact request user is sending and based on user request to find which services and api cattered to that services

API-GATEWAY acts as a interface between users and loosely coupled micro-services

- Advantages
  - Loosely Coupled
  - Agile and Flexible
  - Independent Development
  - Independent Depluoment
  - Fault Isolation
  - Mixed Technology Stack
  - Granular and Scalling

- Disadvantages
  - High Complexity
  - consistency
  - Automation
  - Debuging 

Monolithic and Microservices both exist , both have there advantages as well as disadvantages , but the new era moving toward the micoservices architecture

basically depending on business useCase we decides wich architecture we have used , if the project has small , there are less number of developer working on it there are less deployed go to monolithic architecture 
but but , your application is much bigger as amazon , microsoft , nrtflix go to microservices architecture , it has own disavantages but we can rectified this disadvantage using KUBERNATIVE AND CONTAINER

# Why do we need a useEffect Hook?
- basically if i want to something run after component rendered , the useEffect hook comes into the picture

- Example :- i want my restaurent component render with some static data as soon as my component rendered completely i wnat to call my api to fetch restaurent data , so in that used case we need useEffect hook , after api cal i have update my state-varible so as the state varible update it trigger the reconcillation and re-rendered the component

useEffect(()=>{

},[])

1) useEffect takes two argument 1. callback function 2. dependency array

what is Dependency Array?
 - as the name suggest dependency , that means in which state varible our useEffect depend when it when useEffect callback function called

1) what does when you add Empty Dependency array?
useEffect(()=>{

},[])
- When you add empty dependany array , useEffect called once and it called after the initial render

2) what does when you add state variable in dependency array?
useEffect(()=>{

},[searchRext,userProfile])

so useEffect called once the initial rendering and each times when my (searchText and userProfile) state Variable changes

3) what does when you not add dependency array in useEffect()?
useEffect(()=>{

})
it will called once after initial rendering and call each time when my component rendered but after the component render

# What is Optional Chaining operator?
- basically Optional chaining is Operation of javascript , it check nested value of object it found return this value otherwise return undefined , not throughing the error

ex: const obj = {
    name : {
        game : {
            kame : "Kamal"
        }
    }
}

console.log(obj.kame.game) without optional chaining it througing the error because it try to find value inside the obj.kame ==> usndefined.game ==> through error

but using Optional chaining it returning undefined rather that the throwing error
console.log(obj?.kame?.game)


# What is Async Await
 - Basically Async Await handled the promises in synchronous manner
we make our code async and tell to the code , hey wait upto our response not resolve as the promise resolved we moved farword

# What is the use of const json = await data.json()

const data = await fetch("http://localhost:8081/api/v1/getRestaurent)

when we calling the fetch with api , it returened response body it in readabme stream , if i wnat to change this readable stream to json we used this line of code

const json = await data.json()