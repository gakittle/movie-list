import React from 'react';

var ListItem = ({ movie, watchItem }) => {
  const { title, wasWatched } = movie;
  var buttonMsg;
  if (wasWatched) {
    buttonMsg = 'Encore!';
  } else {
    buttonMsg = 'Watched!';
  }
  return (
    <div className="movie">
      <div className="movieTitle" >{title}</div>
      <button className="watched" id={title} onClick={(e) => {
        watchItem(e, title);
      }}>{buttonMsg}</button>
    </div>
  );
}

export default ListItem;
