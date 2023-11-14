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