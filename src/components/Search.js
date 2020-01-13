import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="search-description">
        <input
          className="input-box"
          type="text"
          value={this.props.query}
          onChange={this.props.onQueryChange}
        />
        <div className="btn">
          <button onClick={this.props.onSearch} className="button">
            Search
          </button>
        </div>
      </div>
    );
  }
}
