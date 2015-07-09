function PhotoGroup(photoData) {
  this.photoIds = [];
  this.photoList = {};
  this.addPhotosToGroup(photoData);
}

PhotoGroup.prototype.addPhotosToGroup = function(photoData) {
  for (var i=0; i < photoData.photos.photo.length; i++) {
    photo = photoData.photos.photo[i];
    this.photoList[photo.id] = {
      title: photo.title,
      url: "http://farm" + photo.farm + ".static.flickr.com/" +
        photo.server + "/" + photo.id + "_" + photo.secret + ".jpg",
      tags: null,
      dateUploaded: null,
      views: 0
    }
    this.getPhotoDetail(photo.id);
  };
}

PhotoGroup.prototype.displayPhotos = function() {
  var html = "";
  for (var id in this.photoList) {
    html += '<li><img alt="'+ this.photoList[id].title + '"src="' + this.photoList[id].url + '"/>' + '</li>';
  };
  $('#photo-grid').append("<ul class=\"small-block-grid-2 medium-block-grid-3 large-block-grid-4\">" + html + "</ul>");
}

PhotoGroup.prototype.getPhotoDetail = function(id) {
  group = this;
  var urlString = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo" + "&api_key=" + self.flickr.apiKey + "&photo_id=" + id + "&format=json&jsoncallback=?"
  $.ajax({
    url:        urlString,
    dataType:   "jsonp",
    success:    function(data){
      group.photoList[id].tags = data.photo.tags;
      group.photoList[id].dateUploaded = data.photo.dateuploaded;
      group.photoList[id].views = data.photo.views;
    }
  });
}
