import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { replaceRestaurent } from "./restaurentSlice"
import { compose } from "@reduxjs/toolkit"

const useRestaurent = (latitude , longitude)=>{

    const [restaurent , setRestaurent] = useState([])
    // const dispatch = useDispatch()

    useEffect(()=>{
        fetchRestaurent()
    },[])


    const fetchRestaurent = async()=>{
        const data = await fetch(`https://www.swiggy.com/mapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1`)

        const json = await data.json()


        setTimeout(()=>{
            setRestaurent(json.restaurent)
            // dispatch(replaceRestaurent(json.restaurent))
        },1000)
    }

    return restaurent
}

export default useRestaurent