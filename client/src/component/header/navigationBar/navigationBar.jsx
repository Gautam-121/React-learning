import "./navigationBar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavigationBar = ({ linkOpen, listName, symbol_logo }) => {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMounseLeave = () => {
    setMouseOver(false);
  };

  return (
    <div className="haeder_nav_list">
      <ul>
        <li>
          <Link to={linkOpen}>
            <div
              className={mouseOver ? "nav_list_item_hover" : "nav_list_item"}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMounseLeave}
            >
              {symbol_logo}
              <p className="nav_list_name">{listName}</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
