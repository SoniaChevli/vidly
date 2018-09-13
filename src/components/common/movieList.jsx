import React, { Component } from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movie }) => {
  return (
    <span>
      <td>
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      </td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
    </span>
  );
};

export default MovieList;
