$(document).ready(function(){
  setSource();
});

function jsonFlickrApi(data) {
  window.data = data;
  var list = "";
  for (var i=0; i < data.photos.photo.length; i++) {
    photo = data.photos.photo[i];
    photo_url = "http://farm" + photo.farm + ".static.flickr.com/" +
      photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
    list +=   '<img alt="'+ photo.title + '"src="' + photo_url + '"/>' + '</a>';
  };
  $('#photo-grid').append(list);
}

function setSource() {
  var apiKey = 'a5e95177da353f58113fd60296e1d250';
  var userID = '132365033@N08'
  var script = document.createElement('script');
  script.src = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + apiKey + "&user_id=" + userID + "&format=json"
  $('head').append(script);
  $('head').remove(script);
}
