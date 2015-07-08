function Photo(photoData) {
  this.id = photoData.id;
  this.farm = photoData.farm;
  this.server = photoData.server;
  this.secret = photoData.secret;
  this.title = photoData.title;
  this.url = this.createPhotoURL();
  this.tags = [];
}

Photo.prototype.createPhotoURL = function() {
  return "http://farm" + this.farm + ".static.flickr.com/" +
        this.server + "/" + this.id + "_" + this.secret + ".jpg";
}