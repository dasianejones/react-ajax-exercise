import React, { Component } from "react";
import Search from "./Search.js";
import Results from "./Results.js";
import "../App.css";
// import { queryTVMazeAPI } from "../util.js";
import axios from "axios";

export default class HomePage extends Component {
  state = {
    movies: [],
    query: "",
    hasSearched: []
  };

  onQueryChange = event => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  onSearch = () => {
    const url = `http://api.tvmaze.com/search/shows?q=${this.state.query}`;
    // use above so that you dont have to import util.js file
    // queryTVMazeAPI(this.state.query);
    //  .then((res) => {
    // this.setState({movies: res.data})
    // })
    axios.get(url).then(res => {
      this.setState({ movies: res.data });
    });
  };

  render() {
    return (
      <div className="home">
        <div className="home-description">
          <h1>TVMaze React</h1>
          <Search
            query={this.state.query}
            onQueryChange={this.onQueryChange}
            onSearch={this.onSearch}
          />
          <Results movies={this.state.movies} />
          {/* created prop up above */}
        </div>
      </div>
    );
  }
}
