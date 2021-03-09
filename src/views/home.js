import React, { Component } from "react";
import fetchService from "../FetchService/fetchService";
import MovieList from "../Components/movieList/movieList";

export default class Home extends Component {
  state = {
    trandingFilms: [],
  };

  async componentDidMount() {
    await fetchService
      .fetchTrandingFilms()
      .then((res) => this.setState({ trandingFilms: res }));
  }

  render() {
    return (
      <div>
        <MovieList movies={this.state.trandingFilms} />
      </div>
    );
  }
}
