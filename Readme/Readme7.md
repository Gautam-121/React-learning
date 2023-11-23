# Something Related to useEffect and useState hook

1) if no dependency array  ==> useEffect called every render of component first component called then useEffect called
useEffect(()=>{

})

2) if dependency array is Empty  [] ==> useEffect called on initial render(just once)
useEffect(()=>{

},[])

3) what if we put something in dependancy array [btnNameREact] ==> then it only be called when the dependancy changes ==> called everytime btnNameReact is updated

4) Never-ever create stateVariable outside the component , try to create stateVariable on top of start to component

5) never create stateVariable inside the if-else and for loop

if(){
    const [searchText , setSearchText] = useState("")
}

for(let i=0;i<5;i++){
    const [searchText , setSearchText] = useState("")
}

# For routing we have use npm i react-router-dom

- Whenever you create a route , we will need to create routing configration

- we will create routing configration on top level-app , we will used createBrouserRouter and this createBrouserRouter create routing configration for us

import {createBrouserRouter , RouterProvider} from "react-router-dom"

1) basically we will creating routing configration inside in appRouter

# But what do mean by routing configration
 - some information that will define that tells what happen when we call to that specific route

craeteBrouserRouter() --> takes list of paths

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:</AppLayout>,
        errorElement : </Error>  // if we search Page not fund it showns this Error Page
    },
    {
        path:"/about",
        element:<About>
    },
     {
        path:"/contact",
        element:<Contact>
    }
])

2) when we will build this configration , i need to provide this configration , but where i provide this configration , i need to provide where it render it
so for that i have one more important component that can import from  react-router-dom , react-router-dom gives that functionallity that giving as a component as name is RouterProvider

This RouterProvider component basically provide my routing configration to our app but how?

root.render(<RouterProvider router={appRouter}>)

- There one more cool feature react-router-dom gives to us in terms of Errors
react-router-dom gives that access of an important hooks that hooks is konw as

import {useRouteError} from "react-router-dom"

- Using this useRouteError it gives more info about error

const Error = ()=>{

    const err = useRouteError()
    console.log(err)  -->( it is object that contain statusCode , errorName)
    return{
   <div>
        <h1>Oops!!!</h1>
        <h2>Something Not Found</h2>
        <h3>{err.status}</h3>
   </div>
    }
}

- Basically but i want to intact my header and footer as well and my body changes according to my path , we used childrenElement iside the Applayout and according to path condition i wnat to render the component

const AppLayout = ()=>{

    return(

        <div>

          <Header>
          render the component bases of condition of path
          {if path = "/" render <Body>}
          {if path = "/about" render <About>} 
          {if path = "/contact" render <Contact>} 
          <Outlet />
          <Footer>

        <div>
    )
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:</AppLayout>,
        errorElement : </Error>  // if we search Page not fund it showns this Error Page
        children:[
        {
        path:"/about",
        element:<About>
        },
        {
        path:"/contact",
        element:<Contact>
        }
     ]
   }
])


Now , i wnat to load this children according to the path , but where should i load this , over here in this AppLayout

so how can load children in AppLayout According to path , so for that react-router-dom gives a something knowns as Outlet

So wheneever change in the path , so my Outlet fill with the children according to the path

# When-ever used react and you route to some other page never-ever used anchor tag ? but why we not used anchor tag

- because when we click anchor tag go to another page , the whole page got refresh , i wnat navigate to new page without reloading , right now the whole page reloaded

so for i want navigate to new page without reloading , for that react-router-dom gives a superPowerfull component called as Link

import {Link} from "react-router-dom"

# How To Used this Link component
- This Link component exactly same working as anchor Tag

<Link to="/about">About Us</Link>


# When We used Link
 - it not refresh the page or reload the page but the refresh the component it jsut changes the component that why we come to important thing , that our react-application is known as single page application
 only it changes here and there component not reload or refresh the page

 # There are Two type of Routing in web Application 
  - Client Side Routing - Right now we have doing in client side routing because we not making any network call for fetching a page , all the component are already loaded on my app when click to load about.html to quicly refresh the component here and there.

  - Server Side Routing - Means you make you make a network call and the page aboutUs.html coming from server , that server side routing


  # Dynamic Routing
   {
        path : "/restaurent/:resId", (always show restaurentMenu basis of resId )
        element : <RestaurentMenu/>
    }

# How i read this dynamic resId in my component RestaurentMenu?
- Again we have superPower that react-router gives to us to used what is there in there params

import {useParams} from "react-router-dom"

Link begind the seen it use Anchor Tag at the end of the day is nothing bhu a anchor tag


const {resId} = useParams() --> this resId contain dynamic param value

# What are the different way to add Images to Our App

1) downLoad the image inside the directory then import in the perticular componenet where you used and used The images

import Logo from "../images/logo.png"

<img src={Logo} alt="This is AppLogo"/>

2) Directly used image Url inside the src

<img src="http://funckyImgaes">

or Store this url in contant file and used dynamic variable

constant.js
   
   export Logo = "http://funckyImages"

Header.jsx

   import {Logo} from "./constant.js
   
   <img src={Logo}>

2) What would happen when you do console.log(useState())

When you do console.log(useState()) it return array in which 0-index contain default value undefined or the value you defined initially and 1-index contain a function that have power that changing your state variable

3) How will useEffect Behave if we don't add dependancy Array

- useEffect(()=>{ useEffect call every time when component render , if we don't add dependancy array

})

4) What is SPA ?

- SPA stands for Single Page Application. It's a web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server. In a traditional multi-page application, each user action (e.g., clicking a link) typically results in a full page reload from the server. In contrast, a SPA loads a single HTML page and dynamically updates the content as the user interacts with the application.

4) What is Difference between Client side Routing and Server side Routing ?

# Client-Side Routing:

1) Execution Location:
Location: Entirely takes place on the client-side (in the user's browser).
Responsibility: The client-side framework or library (e.g., React, Vue, Angular) is responsible for managing the routing.
Navigation Handling:

2) Navigation Handling
: When the user clicks a link or interacts with the application, the client-side router intercepts the request and updates the view without a full page reload.
Page Reload: Typically, no full page reload occurs during navigation, resulting in a smoother and more responsive user experience.
Rendering:

3) Rendering: 
The client-side router updates the DOM based on the defined routes and components, often using a virtual DOM to efficiently manage updates.
Data Fetching: Data fetching for a route can be done on-demand as the user navigates.
Examples:

4) Frameworks: 
Commonly associated with modern JavaScript frameworks/libraries like React Router, Vue Router, and Angular Router.
Web Apps: Well-suited for Single Page Applications (SPAs) where a single HTML page is loaded initially, and subsequent content changes are managed dynamically.

# Server-Side Routing:

1) Execution Location:
Location: Takes place on the server.
Responsibility: The server is responsible for managing the routing and generating the appropriate HTML pages in response to client requests.
Navigation Handling:

2) Navigation Handling: 
When a user clicks a link, a request is sent to the server, which processes the request and returns a new HTML page.
Page Reload: A full page reload occurs, and the entire HTML document is replaced with the new content.
Rendering:

3) Rendering: 
The server generates and renders the HTML for each requested route on the server side.
Data Fetching: Data fetching and processing occur on the server.
Examples:

4) Frameworks: 
Traditional web applications built with server-side frameworks like Express.js (Node.js), Django (Python), Ruby on Rails (Ruby), etc.
Web Apps: Suited for applications with complex server logic, content that changes less frequently, or scenarios where search engine optimization (SEO) is a critical consideration.
