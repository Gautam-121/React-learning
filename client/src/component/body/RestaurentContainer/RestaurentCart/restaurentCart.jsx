import "./restaurentCart.css";
import { CDN_URL } from "../../../../utils/constant";

const RestaurentCart = ({
  name,
  cloudinaryImageId,
  areaName,
  avgRating,
  cuisines,
  aggregatedDiscountInfoV2,
  deliveryTime,
}) => {
  return (
    <div className="restaurentCart_wrapper">
        <img
          src={CDN_URL+cloudinaryImageId}
          alt="this is img"
          width="200px"
          loading="lazy"
        />
        {/* Put AggreGationDiscountInfo if it is True */}
      <div className="restaurent_info_wrapper">
          <p className="res_name">{name}</p>
          <div className="restaurent_info_wrapper_time">
            <i class="fa-solid fa-star rating_symbol"></i>
            <p className="rating">{avgRating}</p>
            <p className="delivery_time">{deliveryTime} mins</p>
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
