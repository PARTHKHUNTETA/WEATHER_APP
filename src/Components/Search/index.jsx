import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <div className="input_div">
        <input
          type="text"
          placeholder="Enter city Name"
          value={search}
          className="city-search"
          name="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="search_div">
        <button onClick={handleSearch} className="searchButton">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
