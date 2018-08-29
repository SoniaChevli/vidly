import React, { Component } from "react";

class MovieList extends Component {
  render() {
    const { movie } = this.props;
    return (
      <span>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
      </span>
    );
  }
}

export default MovieList;
