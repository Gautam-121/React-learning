import "./restaurentContainer.css"
import RestaurentCart from "./RestaurentCart/restaurentCart.jsx"
import { useEffect, useState } from "react"
import Shimmer from "../../shimmer/shimmer.jsx"

const RestaurentContainer = ()=>{

    const [listOfRestaurent , setListOfRestaurent ] = useState([])

    useEffect(()=>{
        fetchData()
        console.log("UseEffect Called after Restaurent Render Competely rendered")
    },[])

    const fetchData = async ()=>{
        const data =  await fetch(
            "http://localhost:3000/api/v1/getAllRestaurent")
        
        const json = await data.json()
        setListOfRestaurent(json.restaurent)
    }

    console.log("Restaurent Rendered")
    return listOfRestaurent.length == 0 ? <Shimmer/> : (
        <div className="restaurentContainer_wrapper"> 
            {
                listOfRestaurent.map((restaurent)=>(
                    <RestaurentCart key={restaurent.id} {...restaurent}/>
                ))
            }
        </div>
    )
}

export default RestaurentContainer