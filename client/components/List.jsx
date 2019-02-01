import React from 'react';
import ListItem from './ListItem.jsx';

var List = props => {
  var blankMsg;
  if (props.blank) {
    blankMsg =
      "Striker: 'Surely you can't be serious.'\nRumack: 'I am serious...and don't call me Shirley.'";
  }
  return (
    <div className="items">
      <div>{blankMsg}</div>
      {props.movies.map(movie => {
        if (movie.show) {
          return <ListItem movie={movie} key={movie.title} />;
        }
      })}
    </div>
  );
};

export default List;
