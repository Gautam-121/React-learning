import "./restaurentShimmer.css"

const RestaurentShimmer = () => {
  const shimmerRestaurent = new Array(15).fill(0);

  return (
    <div className="restaurent_shimmer_wrapper">
      {shimmerRestaurent.map((res, index) => (
        <div key={index} className="restaurentCart_shimmer_wrapper">
          <div className="img"></div>
          <div className="restaurent_info_shimmer_wrapper">
            <p className="res_name_shimmer"></p>
            <div className="restaurent_info_wrapper_time_shimmer">
              <i className="rating_symbol_shimmer"></i>
              <p className="rating_shimmer"></p>
              <p className="delivery_time_shimmer"></p>
            </div>
            <div className="restaurent_cusines_shimmer">
              <p></p>
            </div>
            <div className="location_shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurentShimmer;
