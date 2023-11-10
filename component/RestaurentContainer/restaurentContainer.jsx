import "./restaurentContainer.css"
import RestaurentCart from "./RestaurentCart/restaurentCart"
import { restaurants } from "../../constant"


const RestaurentContainer = ()=>{
    return(
        <div className="restaurentContainer_wrapper"> 
            {
                restaurants.map((restaurent)=>(
                    <RestaurentCart key={restaurent.info.id} {...restaurent.info}/>
                ))
            }
        </div>
    )
}

export default RestaurentContainer