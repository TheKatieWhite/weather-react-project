import React from "react";

export default function Search() {
  return (
    <form id="enterCity">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control entercity"
              placeholder="Enter a city..."
              autoComplete="off"
              id="city-input"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-primary"
              id="button-search"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
