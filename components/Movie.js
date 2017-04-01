import React from 'react';

const Movie = (props) => {
    const { movie } = props;
    return (
        <div className="col col-md-4 movie">
            <div>
                <h2>{movie.Title}</h2>
                <strong>{movie.Year}</strong>
            </div>
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
    );
}
export default Movie;
