import React from 'react';
import ListItem from './ListItem.jsx';

var List = props => (
  <div>
    {props.movies.map(movie => (
      <ListItem movie={movie} />
    ))}
  </div>
);

export default List;
