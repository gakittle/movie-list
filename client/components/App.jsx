import React from 'react';
import List from './List.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' }
      ],
      query: ''
    };
  }

  render() {
    return (
      <div className="app">
        <div className="title">Movie List</div>
        <Search query={this.state.query} />
        <List movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
