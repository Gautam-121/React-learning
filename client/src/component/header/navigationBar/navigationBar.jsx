import "./navigationBar.css"
import { useState } from "react"

const NavigationBar = ({linkOpen , listName , symbol_logo })=>{

    const [mouseOver , setMouseOver] = useState(false)

    const handleMouseOver = ()=>{
        setMouseOver(true)
      }
    
      const handleMounseLeave = ()=>{
        setMouseOver(false)
      }

    return(
        <div className="haeder_nav_list">
        <ul>
          <li>
            <a href={linkOpen}>
              <div className={mouseOver?"nav_list_item_hover" : "nav_list_item"}  onMouseOver={handleMouseOver} onMouseLeave={handleMounseLeave} >
                {symbol_logo}
                <p className="nav_list_name">
                  {listName} 
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
}

export default NavigationBar