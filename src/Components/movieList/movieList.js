import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const MovieList = ({ movies, match, query = "" }) => {
  return (
    <ul className="ul">
      {movies.map(({ id, title, name, poster_path }) => (
        <li className="li" key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { query, from: match.url },
            }}
          >
            {title ? title : name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
