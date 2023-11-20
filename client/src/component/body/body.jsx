import RestaurentContainer from "./RestaurentContainer/restaurentContainer";
import Filter from "./filter/filter";
import "./body.css";

const Body = () => {
  return (
    <div className="body_wrapper">
      <Filter />
      <RestaurentContainer />
    </div>
  );
};

export default Body;
