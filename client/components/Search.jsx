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
          <input id="field" />
          <input
            type="submit"
            value="Go!"
            onClick={e => {
              var entered = document.getElementById('field').value;
              this.props.query(e, entered);
            }}
          />
        </form>
      </div>
    );
  }
}

export default Search;
