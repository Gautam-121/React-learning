import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { replaceRestaurent } from "./restaurentSlice"

const useRestaurent = ()=>{

    const [restaurent , setRestaurent] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        fetchRestaurent()
    },[])

    const local = JSON.parse(localStorage.getItem("location"))

    const fetchRestaurent = async()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${local.latitude? local.latitude : 21.1458004}&lng=${local.longitude ? local.longitude : 79.0881546 }`)

        const json = await data.json()


        setTimeout(()=>{
            setRestaurent(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            dispatch(replaceRestaurent(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
        },1000)
    }

    return restaurent
}

export default useRestaurent