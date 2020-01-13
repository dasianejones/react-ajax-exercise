import React, { Component } from "react";

export default class Result extends Component {
  render() {
    return (
      <div key={this.props.id}>
        {this.props.image ? (
          <img src={this.props.image.original} width="200" />
        ) : null}
        <div>{this.props.name}</div>
      </div>
    );
  }
}
