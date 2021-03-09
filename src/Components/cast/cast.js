import React, { Component } from "react";
import fetchService from "../../FetchService/fetchService";
import defaultImg from "../../Images/default.png";

export default class cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { movieId } = this.props;
    await fetchService
      .fetchFilmCast(movieId)
      .then((res) => this.setState({ cast: [...res] }));
  }

  render() {
    const { cast } = this.state;
    return (
      <ul className="ul">
        {cast.map(({ profile_path, name, character, cast_id }) => (
          <li className="li" key={cast_id}>
            <h2>{name}</h2>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
            <h3>Role:</h3>

            <p>{character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
