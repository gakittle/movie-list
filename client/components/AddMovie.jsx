import React from 'react';

var AddMovie = props => {
  return (
    <div id="add">
      <form>
        <input id="adder" />
        <input
          type="submit"
          value="Add!"
          id="add-btn"
          onClick={e => {
            var entered = document.getElementById('adder').value;
            props.adder(e, entered);
          }}
        />
      </form>
    </div>
  );
};

export default AddMovie;
