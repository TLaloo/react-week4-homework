import React from "react";

import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" class="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1>Toronto</h1>
              <ul>
                <li>
                  Last updated: <span>February 10, 2023</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
