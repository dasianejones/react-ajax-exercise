import React, { Component } from "react";
import Result from "./Result.js";

export default class Results extends Component {
  render() {
    return (
      <div className="results-container">
        <div className="btn">
          <button onClick={this.props.toggleHasSearch} className="button">
            Search Again?
          </button>
        </div>
        {this.props.movies.map(movie => {
          return (
            <Result
              id={movie.show.id}
              name={movie.show.name}
              image={movie.show.image}
            />
          );
        })}
      </div>
    );
  }
}
