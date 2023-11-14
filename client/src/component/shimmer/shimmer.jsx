import "./shimmer.css";

const Shimmer = () => {

  const shimmerRestaurent = new Array(15).fill("")
  return (
    <div className="shimmer_wrapper">
            <div className="restaurentCart_wrapper">
        <img
          src=""
          alt="this is img"
          width="200px"
          loading="lazy"
        />
        {/* Put AggreGationDiscountInfo if it is True */}
      <div className="restaurent_info_wrapper">
          <p className="res_name"></p>
          <div className="restaurent_info_wrapper_time">
            <i class="fa-solid fa-star rating_symbol"></i>
            <p className="rating"></p>
            <p className="delivery_time"></p>
          </div>
        <div className="restaurent_cusines">
          <p></p>
        </div>
        <div className="location"></div>
      </div>
    </div>
     <div className="restaurentCart_wrapper">
     <img
       src=""
       alt="this is img"
       width="200px"
       loading="lazy"
     />
     {/* Put AggreGationDiscountInfo if it is True */}
   <div className="restaurent_info_wrapper">
       <p className="res_name"></p>
       <div className="restaurent_info_wrapper_time">
         <i class="fa-solid fa-star rating_symbol"></i>
         <p className="rating"></p>
         <p className="delivery_time"></p>
       </div>
     <div className="restaurent_cusines">
       <p></p>
     </div>
     <div className="location"></div>
   </div>
 </div>
  <div className="restaurentCart_wrapper">
  <img
    src=""
    alt="this is img"
    width="200px"
    loading="lazy"
  />
  {/* Put AggreGationDiscountInfo if it is True */}
<div className="restaurent_info_wrapper">
    <p className="res_name"></p>
    <div className="restaurent_info_wrapper_time">
      <i class="fa-solid fa-star rating_symbol"></i>
      <p className="rating"></p>
      <p className="delivery_time"></p>
    </div>
  <div className="restaurent_cusines">
    <p></p>
  </div>
  <div className="location"></div>
</div>
</div>
 <div className="restaurentCart_wrapper">
 <img
   src=""
   alt="this is img"
   width="200px"
   loading="lazy"
 />
 {/* Put AggreGationDiscountInfo if it is True */}
<div className="restaurent_info_wrapper">
   <p className="res_name"></p>
   <div className="restaurent_info_wrapper_time">
     <i class="fa-solid fa-star rating_symbol"></i>
     <p className="rating"></p>
     <p className="delivery_time"></p>
   </div>
 <div className="restaurent_cusines">
   <p></p>
 </div>
 <div className="location"></div>
</div>
</div>
    </div>
  );
};

export default Shimmer;
