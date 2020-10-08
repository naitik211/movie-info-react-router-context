import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "./App";
import { useHistory } from "react-router-dom";

const MovieCard = ({ match }) => {
  const data = useContext(DataContext);
  const [movie, setMovie] = useState({});
  const history = useHistory();

  useEffect(
    () => {
      if (data && data.length) {
        setTimeout(() => {
          const filteredMovie = data.find(d => {
            return d.title === match.params.cardId;
          });
          setMovie(filteredMovie);
        }, 500);
      }
    },
    [data]
  );

  const goToHome = () => {
    history.push(`/`);
  };

  return (
    <section>
      {movie && (
        <div className="info">
          <div className="left">
            <img src={movie.posterurl} alt={movie.name} />
          </div>

          <div className="right">
            <div className="detail-container">
              <label>Movie Name:</label>
              <div>{movie.title}</div>
            </div>
            <div className="detail-container">
              <label>Movie Casts:</label>
              <div>{movie.actors}</div>
            </div>
            <div className="detail-container">
              <label>Movie Rating:</label>
              <div>{movie.imdbRating}</div>
            </div>
            <div className="detail-container">
              <label>Movie Story:</label>
              <div>{movie.storyline}</div>
            </div>
            <div className="detail-container booking-button">
              <button class="button" onClick={goToHome}>
                Back to home
              </button>
              <button class="button">Bookings are open</button>
            </div>
          </div>
        </div>
      )}
      {movie === null && <div>Loading</div>}
      {movie === undefined ? <div>Invalid movie id</div> : ""}
    </section>
  );
};

export default React.memo(MovieCard);
