import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Cast from "../Components/cast/Cast";
import Reviews from "../Components/reviews/Reviews";
import fetchService from "../FetchService/FetchService";

export default class MovieDetails extends Component {
  state = {
    film: {},
    cast: [],
    params: {},
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await fetchService
      .fetchFilmById(movieId)
      .then((res) =>
        this.setState({ film: res, params: { ...this.props.location.state } })
      );
  }

  render() {
    const {
      title,
      poster_path,
      overview,
      genres,
      vote_average,
    } = this.state.film;
    const { movieId } = this.props.match.params;

    return (
      <div>
        <button
          type="button"
          onClick={() =>
            this.state.params.query
              ? this.props.history.push({
                  pathname: this.state.params.from,
                  search: `query=${this.state.params.query}`,
                  query: this.state.params.query,
                })
              : this.props.history.push("/")
          }
        >
          Back
        </button>
        <h2>{title}</h2>
        {poster_path ? (
          <>
            <div className="filmContainer">
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
              />
              <div className="filmInfo">
                <h3>Genres:</h3>
                <ul>
                  {genres.map((genre) => (
                    <li key={uuidv4()}>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <h3>User Score: {vote_average * 10}%</h3>
            </div>
            <h2>About film</h2>
            <p>{overview}</p>
          </>
        ) : null}
        <div>
          <h3>Additional information</h3>
          <ul className="headerUl">
            <li>
              <NavLink
                to={`${this.props.match.url}/cast`}
                style={{ color: "#000000", textDecoration: "none" }}
                activeStyle={{ color: "#FF4500", fontSize: 25 }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${this.props.match.url}/rviews`}
                style={{ color: "#000000", textDecoration: "none" }}
                activeStyle={{ color: "#FF4500", fontSize: 25 }}
              >
                Rviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Route
          path={`${this.props.match.url}/cast`}
          render={() => <Cast movieId={movieId} />}
        />
        <Route
          path={`${this.props.match.url}/rviews`}
          render={() => <Reviews movieId={movieId} />}
        />
      </div>
    );
  }
}
