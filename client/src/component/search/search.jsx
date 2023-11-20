import "./search.css";
import { useState } from "react";
import RestaurentCart from "../body/RestaurentContainer/restaurentCart";
import useRestaurent from "../../utils/useRestaurent";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurents, setRestaurents] = useState(null);
  const allRestaurent = useRestaurent()

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText.length!=0) {
      const filterRestaurent = allRestaurent.filter((restaurent) =>
        restaurent.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setRestaurents(filterRestaurent);
    }
  };

  return (
    <div className="search_restaurent_wrapper">
      <div className="search_wrapper">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={handleKeyDown}
        />
        <div className="search_icon">
        <i class="fa-solid fa-magnifying-glass "></i>
        </div>
      </div>
      <div className="restaurent_list">
        {restaurents != null && restaurents.length == 0 && (
          <h3> No Restaurent Found </h3>
        )}
        {restaurents != null &&
          restaurents.length != 0 &&
          restaurents.map((restaurent) => (
            <RestaurentCart key={restaurent.id} {...restaurent} />
          ))}
      </div>
    </div>
  );
};

export default Search;
