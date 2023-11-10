import "./header.css";
import SearchBar from "./searchBar/searchBar";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="logo_location_wrapper">
        <div className="logo_wrapper">
          <a href="/">
            <div className="logo"></div>
          </a>
        </div>
        <div className="dropDown_location">
          <select name="" id="">
            <option value="">
              {"J.P.Nagar"} {"R.k Colony,Manjunath Colony..."}
            </option>
          </select>
        </div>
      </div>
      <SearchBar />
      <nav>
        <ul>
          <li>
            <a href="/offer-near-me">Offers</a>
          </li>
          <li>
            <a href="/support">Help</a>
          </li>
          {/* Render A component According To Click SignIn */}
          <li>
            <a href="">Sign In</a>
          </li>
          <li>
            <a href="/checkout">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
