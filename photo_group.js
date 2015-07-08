function PhotoGroup(photoData) {
  this.photoIds = [];
  this.photos = this.addPhotosToGroup(photoData);
}

PhotoGroup.prototype.addPhotosToGroup = function(photoData) {
  var group = [];
  for (var i=0; i < photoData.photos.photo.length; i++) {
    photoObj = new Photo(photoData.photos.photo[i])
    group.push(photoObj);
    this.photoIds.push(photoObj.id);
  };
  return group;
}

PhotoGroup.prototype.displayPhotos = function() {
  var html = "";
  for (var i=0; i < this.photos.length; i++) {
    html +=   '<li><img alt="'+ this.photos[i].title + '"src="' + this.photos[i].url + '"/>' + '</li>';
  };
  $('#photo-grid').append("<ul class=\"small-block-grid-2 medium-block-grid-3 large-block-grid-4\">" + html + "</ul>");
}
