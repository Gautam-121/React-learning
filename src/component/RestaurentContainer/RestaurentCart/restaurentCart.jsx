import "./restaurentCart.css";
import { CDN_URL } from "../../../utils/constant";

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
      <div className="img_wrapper">
        <img
          src={CDN_URL+cloudinaryImageId}
          alt="this is img"
        />
        {/* Put AggreGationDiscountInfo if it is True */}
      </div>
      <div className="restaurent_info_wrapper">
        <div className="restaurent_name_rating_wrapper">
          <p>{name}</p>
          <div className="_restaurent_info_wrapper">
            <span>⭐{avgRating}</span>
            <spam>.</spam>
            <span>{sla.deliveryTime} mins</span>
          </div>
        </div>
        <div className="restaurent_cusines">
          <p>{cuisines.join(" , ")}</p>
        </div>
        <div className="location">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurentCart;
