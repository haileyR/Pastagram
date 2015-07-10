function PhotoGroup(photoData) {
  "use strict";
  this.photoIds = [];
  this.photoList = {};
  this.addPhotosToGroup(photoData);
}

PhotoGroup.prototype.addPhotosToGroup = function(photoData) {
  "use strict";
  for (var i=0; i < photoData.photos.photo.length; i++) {
    var photo = photoData.photos.photo[i];
    this.photoList[photo.id] = {
      title: photo.title,
      url: "http://farm" + photo.farm + ".static.flickr.com/" +
        photo.server + "/" + photo.id + "_" + photo.secret + ".jpg",
      tags: null,
      dateTaken: null,
      views: 0
    };
    this.getPhotoDetail(photo.id);
  }
};

PhotoGroup.prototype.getPhotoDetail = function(id) {
  "use strict";
  var group = this;
  var urlString = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo" + "&api_key=" + self.flickr.apiKey + "&photo_id=" + id + "&format=json&jsoncallback=?";
  $.ajax({
    url:        urlString,
    dataType:   "jsonp",
    success:    function(data){
      group.photoList[id].tags = data.photo.tags;
      group.photoList[id].dateTaken = data.photo.dates.taken.split(" ")[0];
      group.photoList[id].views = data.photo.views;
    }
  });
};

PhotoGroup.prototype.sortByViews = function() {
  "use strict";
  var sortable = [];
  for (var photo in this.photoList) {
    sortable.push([photo, this.photoList[photo]]);
  }
  sortable.sort(function(a, b) {
    return parseInt(a[1].views) - parseInt(b[1].views);
  });
  sortable.reverse();
  self.view.displayPhotos(sortable);
};

PhotoGroup.prototype.sortBy = function(option) {
  "use strict";
  var urlString = "https://api.flickr.com/services/rest/?method=flickr.photos.search" + "&api_key=" + self.flickr.apiKey + "&user_id=" + self.flickr.userID + "&sort=" + option + "&privacy_filter=1" + "&format=json&jsoncallback=?";
  $.ajax({
      url:        urlString,
      dataType:   "jsonp",
      success:    function(data){
        var sorted = data;
        self.view.displayPhotos(data.photos.photo);
      }
  });
};
