import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { replaceRestaurent } from "./restaurentSlice"

const useRestaurent = ()=>{

    const [restaurent , setRestaurent] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        fetchRestaurent()
    },[])


    const fetchRestaurent = async()=>{
        const data = await fetch("http://localhost:3000/api/v1/getAllRestaurent")
        const json = await data.json()

        setTimeout(()=>{
            setRestaurent(json.restaurent)
            dispatch(replaceRestaurent(json.restaurent))
        },1000)
    }

    return restaurent
}

export default useRestaurent