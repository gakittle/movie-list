import React from 'react';
import ListItem from './ListItem.jsx';

var List = props => (
  <div>
    {props.movies.map(movie => (
      <ListItem movie={movie} key={movie.title} />
    ))}
  </div>
);

export default List;
