import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']
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
