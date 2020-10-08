import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./App";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const data = useContext(DataContext);

  const getMovieList = () => {
    return data.map((movie, index) => {
      return (
        <li key={index} className="card">
          <Link to={`/${movie.title}`}>
            <div className="card-img">
              <img src={movie.posterurl} alt={movie.title} />
            </div>
            <div className="movie-info">
              <div className="title-rating">
                <div>{movie.title}</div>
                <div className="rating">{movie.imdbRating}</div>
              </div>
              <div>
                {movie.actors.map((a, index) => {
                  return (
                    <div key={`${a}-${index}`} className="cast">
                      {a}
                    </div>
                  );
                })}
              </div>
            </div>
          </Link>
        </li>
      );
    });
  };
  return (
    <React.Fragment>
      <SearchBar data={data} />
      <ul className="list-wrapper">
        {data && data.length ? getMovieList() : <div />}
      </ul>
    </React.Fragment>
  );
};

export default React.memo(MovieList);
