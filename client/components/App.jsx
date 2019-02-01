import React from 'react';
import _ from 'underscore';
import $ from 'jquery';
import List from './List.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: 'Mean Girls', show: true },
        { title: 'Hackers', show: true },
        { title: 'The Grey', show: true },
        { title: 'Sunshine', show: true },
        { title: 'Ex Machina', show: true }
      ],
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

  render() {
    return (
      <div className="app">
        <div className="title">Movie List</div>
        <Search query={this.handleSearchClick.bind(this)} />
        <List movies={this.state.movies} blank={this.state.blank} />
      </div>
    );
  }
}

export default App;
