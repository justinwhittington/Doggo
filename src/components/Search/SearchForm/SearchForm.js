import React from "react";

const SearchForm = props => (
  <div>
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          placeholder="Enter Breed"
          id="search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={props.handleFormSubmit}
        >
          Search
        </button>
      </form>
    </nav>
  </div>
);

export default SearchForm;
