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
      <div>
        <button
          className="watcher"
          onClick={e => {
            props.watcher(e, true);
          }}
        >
          Watched
        </button>
        <button
          className="watcher"
          onClick={e => {
            props.watcher(e, false);
          }}
        >
          To Watch
        </button>
      </div>
      <div>{blankMsg}</div>
      {props.movies.map(movie => {
        if (movie.show && movie.wasWatched === props.watch) {
          return <ListItem movie={movie} key={movie.title} watchItem={props.watchItem} dropDown={props.dropDown} />;
        }
      })}
    </div>
  );
};

export default List;
