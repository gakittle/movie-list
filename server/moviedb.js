let request = require('request');

let queryMovie = (query, callback) => {
  var options = {
    url: `https://api.themoviedb.org/3/movie/550?api_key=7d68129dfdce34cdcf4f1e1315dbb91e&language=en-US`
  };

  let successCb = (error, response, body) => {
    if (error) {
      console.error('Error in API request: ', error);
    } else {
      callback(JSON.parse(body));
    }
  }

  request(options, successCb);
};

module.exports.queryMovie = queryMovie;