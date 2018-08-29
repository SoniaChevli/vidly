import React, { Component } from "react";
import Page from "./common/pages";
import MovieList from "./common/movieList";
import Like from "./common/like";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };
  handleDelete = movieID => {
    const movies = this.state.movies.filter(m => m._id !== movieID);
    this.setState({ movies });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  getMovieCount = () => {
    if (this.state.movies.length === 0) {
      return `There are no movies in the database.`;
    }
    return `Showing ${this.state.movies.length} movies in the database`;
  };

  renderMovies() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies } = this.state;
    const allMovies = paginate(movies, currentPage, pageSize);
    console.log("MOVIES: ", movies);

    return (
      <React.Fragment>
        <span>{this.getMovieCount()}</span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>

              <th />
            </tr>
          </thead>
          <tbody>
            {allMovies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie._id)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Page
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }

  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

export default Movies;
