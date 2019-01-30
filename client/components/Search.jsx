import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  render() {
    return (
      <div className="search">
        <form>
          <input
            onChange={e => {
              this.props.query(e);
            }}
          />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Search;
