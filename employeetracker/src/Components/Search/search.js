import React from "react";

function SearchForm (props) {
    return (
      <form>
        <div className="form-group mx-sm-3">
          <input className="searchinput form-control"
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            placeholder="Search For an Employee"
            id="search"
          />
        </div>
      </form>
    );
  }

export default SearchForm