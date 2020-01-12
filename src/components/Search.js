import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="search-description">
        <input
          className="input-box"
          type="text"
          value="Enter a Movie Title..."
        />
        <div className="btn">
          <button className="button">Search</button>
        </div>
      </div>
    );
  }
}
