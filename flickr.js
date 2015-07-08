function Flickr(photoData) {
  this.apiKey = 'a5e95177da353f58113fd60296e1d250';
  this.userID = '132365033@N08';
}

Flickr.prototype.getData = function(parameters) {
  var script = document.createElement('script');
  script.src = "https://api.flickr.com/services/rest/?" + "method=" + parameters.method + "&api_key=" + this.apiKey + (parameters.user_id ? "&user_id=" + this.userID : "" ) + "&format=json"
  $('head').append(script);
  $('head').remove(script);
}


