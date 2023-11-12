import { useState } from "react";
import "./header.css";
import SearchBar from "./searchBar/searchBar";
import { navList } from "../../mockData";
import NavigationBar from "./navigationBar/navigationBar";

const Header = () => {
  const [focused, setFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [mouseOver , setMouseOver] = useState(false)

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleMouseOver = ()=>{
    setMouseOver(true)
  }

  const handleMounseLeave = ()=>{
    setMouseOver(false)
  }

  return (
    <div className="header_container">
      <div className="header_wrapper">
      <div
        className="logo_location_wrapper"
        onMouseOver={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
      >
        <div className="logo_wrapper">
          <a href="/">
            <div className="logo"></div>
          </a>
        </div>
        <div className="dropDown_location">
          <p className={focused ? "location_area_hover" : "location_area"}>
            {"J.P.Nagar"}
          </p>
          <p className="location_colony">
            {"R.k Colony,Manjunath Colony jp nagar basic area reoad"}
          </p>
          <i class="fa-solid fa-chevron-down down_icon"></i>
        </div>
      </div>
      <div className="navigation_wrapper">
      {
        navList.map((item)=>(
          <NavigationBar key={item.id} {...item} mouseOver={mouseOver} />
        ))
      }
      </div>
    </div>
    </div>
  );
};

export default Header;