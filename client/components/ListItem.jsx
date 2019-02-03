import React from 'react';

var ListItem = props => {
  var buttonMsg;
  if (props.movie.wasWatched) {
    buttonMsg = 'Encore!';
  } else {
    buttonMsg = 'Watched!';
  }
  return (
    <div className="movie">
      <div className="movieTitle" >{props.movie.title}</div>
      <button className="watched" id={props.movie.title} onClick={(e) => {
        var title = props.movie.title;
        props.watchItem(e, title);
      }}>{buttonMsg}</button>
    </div>
  );
}

export default ListItem;
