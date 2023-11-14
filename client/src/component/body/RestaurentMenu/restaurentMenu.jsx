import "./restaurentMenu.css"
import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { MENU_API } from "../../../utils/constant"

const RestaurentMenu = ()=>{

    const [resInfo , setResInfo] = useState(null)
    useEffect(()=>{
        fetchMenu()
    },[]);

    const {resId} = useParams()

    console.log(resId)

    const fetchMenu = async () =>{
        const data = await fetch( MENU_API + 434304)
        const json = await data.json()
        console.log(json)

        //update State variable , so it trigger reconciallation algorthm and re-rendered the component with new data
        setResInfo(json.data)
    }

    //early Return
    if(resInfo === null) return <h1>This is Shimmer Ui</h1>
    
    return (
        <div className="menu">
            <h1>Name of the Restaurent</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurentMenu