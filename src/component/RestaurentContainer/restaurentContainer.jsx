import "./restaurentContainer.css"
import RestaurentCart from "./RestaurentCart/restaurentCart"
import { restaurants } from "../../mockData.js"
import { useState } from "react"


const RestaurentContainer = ()=>{

    const [listOfRestaurent , setListOfRestaurent ] = useState(restaurants)
    // Normal Js Varible
    return(
        <div className="restaurentContainer_wrapper"> 
          <button onClick={()=>{
            const resList = listOfRestaurent.filter((res)=>res.info.avgRating > 4)
            setListOfRestaurent(resList)
          }}
          >Top Rated Restaurent</button>
            {
                listOfRestaurent.map((restaurent)=>(
                    <RestaurentCart key={restaurent.info.id} {...restaurent.info}/>
                ))
            }
        </div>
    )
}

export default RestaurentContainer