import React, { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const SearchBar = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const getFilteredData = () => {
    const elem = document.getElementById("autocomplete");
    const target = elem.value;
    if (!target) {
      setFilteredData([]);
      return;
    }
    const filteredData = data.filter(obj => {
      if (obj.title.toLowerCase().match(target) !== null) {
        return obj;
      }
    });
    setFilteredData(filteredData);
  };

  return (
    <div className="search-box">
      <label>Search here</label>
      <input
        type="autocomplete"
        id="autocomplete"
        placeholder="Enter Movie Name"
        onChange={_.debounce(getFilteredData, 500)}
        className="autocomplete"
      />
      {filteredData.length ? (
        <ul className="list-container">
          {filteredData.map((obj, index) => {
            return (
              <li key={`${obj.title}-${index}`}>
                <Link to={`/${obj.title}`}>{obj.title}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default React.memo(SearchBar);
