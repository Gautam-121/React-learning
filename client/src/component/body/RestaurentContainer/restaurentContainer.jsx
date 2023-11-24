import "./restaurentContainer.css";
import RestaurentCart from "./restaurentCart.jsx";
import { Link } from "react-router-dom";
import useRestaurent from "../../../utils/useRestaurent.js";
import RestaurentShimmer from "../../shimmer/restaurentShimmer/restaurentShimmer.jsx";

const RestaurentContainer = () => {

  const allRestaurent = useRestaurent();

  console.log("allRestaurent" , allRestaurent)

  //Conditional Rendering
  return (!allRestaurent || allRestaurent.length == 0) ? (
    <RestaurentShimmer />
  ) : (
    <div className="restaurentContainer_wrapper">
      {allRestaurent.map((restaurent) => (
        <Link to={"/restaurent/" + restaurent.id} key={restaurent.id}>
          <RestaurentCart {...restaurent.info} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurentContainer;
