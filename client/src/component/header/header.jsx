import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { navList } from "../../mockData";
import NavigationBar from "./navigationBar/navigationBar";

const Header = () => {
  
  const [focused, setFocused] = useState(false);

  console.log(useState())

  return (
    <div className="header_container">
      <div className="header_wrapper">
        <div
          className="logo_location_wrapper"
          onMouseOver={() => setFocused(true)}
          onMouseLeave={() => setFocused(false)}
        >
          <div className="logo_wrapper">
            <Link to="/">
              <div className="logo"></div>
            </Link>
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
          {navList.map((item) => (
            <NavigationBar key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
