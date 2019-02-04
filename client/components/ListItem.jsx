import React from 'react';

var ListItem = ({ movie, watchItem, dropDown }) => {
  const { title, wasWatched, selected } = movie;
  var buttonMsg;
  if (wasWatched) {
    buttonMsg = 'Encore!';
  } else {
    buttonMsg = 'Watched!';
  }
  var dropDownInfo;
  if (selected) {
    dropDownInfo = 'Such info. Much movie. Wow.';
  }

  return (
    <div className="movie" onClick={(e) => {
      dropDown(e, title);
    }}>
      <div className="movieTitle" >{title}</div>
      <button className="watched" id={title} onClick={(e) => {
        watchItem(e, title);
      }}>{buttonMsg}</button>
      <div className="info">
        {dropDownInfo}
      </div>
    </div>
  );
}

export default ListItem;
