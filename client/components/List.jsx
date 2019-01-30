import React from 'react';
import ListItem from './ListItem.jsx';

var List = props => (
  <div className="items">
    {props.movies.map(movie => {
      if (movie.show) {
        return <ListItem movie={movie} key={movie.title} />;
      }
    })}
  </div>
);

export default List;
