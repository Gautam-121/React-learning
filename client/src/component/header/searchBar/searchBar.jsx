import "./searchBar.css"

const SearchBar = ({handleInput , value , handleSearchRestaurent})=>{
    return(
        <div className="search_filed">
            <input type="text" placeholder="Search for restaurents and food" value={value} onChange={handleInput} onMouseEnter={handleSearchRestaurent}/>
        </div>
    )
}

export default SearchBar