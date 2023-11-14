import "./restaurentContainer.css"
import RestaurentCart from "./RestaurentCart/restaurentCart.jsx"
import { useEffect, useState } from "react"
import Shimmer from "../../shimmer/shimmer.jsx"

const RestaurentContainer = ()=>{

    const [listOfAllRestaurent , setListOfRestaurent ] = useState([])
    const [filterRestaurent , setFilteredRestaurent] = useState([])

    const [searchText , setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
        console.log("UseEffect Called after Restaurent Render Competely rendered")
    },[])

    const fetchData = async ()=>{
        const data =  await fetch(
            "http://localhost:3000/api/v1/getAllRestaurent")
        
        const json = await data.json()
        setListOfRestaurent(json.restaurent)
        setFilteredRestaurent(json.restaurent)
    }

    console.log("Restaurent Rendered")

    //Conditional Rendering
    return listOfAllRestaurent.length == 0 ? <Shimmer/> : (
        <div className="restaurentContainer_wrapper"> 
        <div>
            <input type="text" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} onKeyDown={(e)=>{
               //Click this button i wnat to filter the restaurent according to serachText
               if(e.key === "Enter"){
                const filterRestaurent = listOfAllRestaurent.filter((restaurent)=>restaurent.name.toLowerCase().includes(searchText))
               setFilteredRestaurent(filterRestaurent)
               }

            }}/>
            {/* <button onClick={()=>{
               //Click this button i wnat to filter the restaurent according to serachText
               const filterRestaurent = listOfAllRestaurent.filter((restaurent)=>restaurent.name.toLowerCase().includes(searchText))
               setFilteredRestaurent(filterRestaurent)

            }}>Click</button> */}
        </div>
            {
               filterRestaurent.length == 0 ? <h1>No Restaurent Found</h1> : filterRestaurent.map((restaurent)=>(
                <RestaurentCart key={restaurent.id} {...restaurent}/>
            ))
            }
        </div>
    )
}

export default RestaurentContainer