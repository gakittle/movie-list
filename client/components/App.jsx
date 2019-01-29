import React from 'react';
import List from './List.jsx';

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
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="title">Movie List</div>
        <List movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
