import React, { Component } from "react";
import fetchService from "../../FetchService/fetchService";

export default class reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props;
    await fetchService
      .fetchFilmReview(movieId)
      .then((res) => this.setState({ reviews: [...res] }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {this.state.reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We dont have any reviews for this movie</h3>
        )}
      </>
    );
  }
}
