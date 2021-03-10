import React, { Component } from "react";
import MovieList from "../Components/movieList/MovieList";
import fetchService from "../FetchService/FetchService";

class Movies extends Component {
  state = {
    movies: [],
    query: "",
  };
  componentDidMount() {
    this.props.location.query
      ? fetchService.fetchFilmsByName(this.props.location.query).then((films) =>
          this.setState({
            movies: [...films],
            query: this.props.location.query,
          })
        )
      : this.setState({
          query: this.props.location.query,
        });
  }
  onHandleChange = (event) => {
    this.setState({ query: event.target.value });
  };
  findMovies = (event) => {
    event.preventDefault();
    const formValue = this.state.query;
    this.props.history.push({
      search: `query=${formValue}`,
    });
    fetchService.fetchFilmsByName(formValue).then((films) =>
      this.setState({
        movies: [...films],
      })
    );
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <form onSubmit={this.findMovies}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.onHandleChange}
          />
          <button type="submit">Search</button>
        </form>
        {movies.length > 0 && (
          <MovieList query={this.state.query} movies={movies} />
        )}
      </>
    );
  }
}

export default Movies;
