import "./restaurentContainer.css"
import RestaurentCart from "./RestaurentCart/restaurentCart.jsx"
import { restaurants } from "../../../mockData.js"
import { useState } from "react"


const RestaurentContainer = ()=>{

    const [listOfRestaurent , setListOfRestaurent ] = useState(restaurants)
    
    return(
        <div className="restaurentContainer_wrapper"> 
            {
                listOfRestaurent.map((restaurent)=>(
                    <RestaurentCart key={restaurent.info.id} {...restaurent.info}/>
                ))
            }
        </div>
    )
}

export default RestaurentContainer