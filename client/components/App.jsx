import React from 'react';
import _ from 'underscore';
import $ from 'jquery';
import List from './List.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: '',
      blank: false
    };
  }

  handleSearchClick(event, query) {
    event.preventDefault();

    var newMovies = this.state.movies;
    var newBlank;
    var blanks = 0;
    newMovies.forEach((movie, index) => {
      var movieTitle = movie.title.toLowerCase();
      query = query.toLowerCase();

      if (movieTitle.includes(query)) {
        newMovies[index].show = true;
      } else {
        newMovies[index].show = false;
        blanks++;
      }
    });

    if (blanks === newMovies.length) {
      newBlank = true;
    } else {
      newBlank = false;
    }

    this.setState({ movies: newMovies });
    this.setState({ blank: newBlank });
  }

  addToList(event, movie) {
    event.preventDefault();
    var newMovie = { title: movie, show: true };
    var allMovies = this.state.movies;
    allMovies.push(newMovie);
    this.setState({ movies: allMovies });
  }

  render() {
    return (
      <div className="app">
        <div className="title">Movie List</div>
        <AddMovie adder={this.addToList.bind(this)} />
        <Search query={this.handleSearchClick.bind(this)} />
        <List movies={this.state.movies} blank={this.state.blank} />
      </div>
    );
  }
}

export default App;
