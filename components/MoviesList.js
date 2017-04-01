import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Movie from './Movie';

@observer
export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
  }

  search(e) {
    this.props.store.search(e.target.value);
  }

  render () {
    const moviesList = this.props.store.movies.map(movie => <Movie key={movie.imdbID} movie={movie} />);
    return (
      <div className="container">
        <h1>Movies library</h1>
        <input placeholder="Search for movie" onChange={this.search} />
        <div className="row movies">
          {moviesList}
        </div>
      </div>
    );
  }
}
