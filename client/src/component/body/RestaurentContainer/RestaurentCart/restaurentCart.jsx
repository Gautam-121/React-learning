import "./restaurentCart.css";
import { CDN_URL } from "../../../../utils/constant";

const RestaurentCart = ({
  name,
  cloudinaryImageId,
  areaName,
  avgRating,
  cuisines,
  aggregatedDiscountInfoV2,
  sla,
}) => {
  return (
    <div className="restaurentCart_wrapper">
        <img
          src={CDN_URL+cloudinaryImageId}
          alt="this is img"
          width="200px"
        />
        {/* Put AggreGationDiscountInfo if it is True */}
      <div className="restaurent_info_wrapper">
          <p className="res_name">{name}</p>
          <div className="restaurent_info_wrapper_time">
            <i class="fa-solid fa-star rating_symbol"></i>
            <p className="rating">{avgRating}</p>
            <p className="delivery_time">{sla.deliveryTime} mins</p>
          </div>
        <div className="restaurent_cusines">
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className="location">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurentCart;
