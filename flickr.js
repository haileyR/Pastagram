function Flickr(photoData) {
  this.apiKey = 'a5e95177da353f58113fd60296e1d250';
  this.userID = '132365033@N08';
}

Flickr.prototype.getData = function(parameters) {
  var urlString = "https://api.flickr.com/services/rest/?" + "method=" + parameters.method + "&api_key=" + this.apiKey + (parameters.user_id ? "&user_id=" + this.userID : "" ) + (parameters.photo_id ? "&photo_id=" + parameters.photo_id : "")  + "&format=json&jsoncallback=?"
  $.ajax({
      url:        urlString,
      dataType:   "jsonp",
      success:    function(data){
        init(data);
      }
  });
}


