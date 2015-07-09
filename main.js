PastagramController = function(flickr, view){
  this.flickr = flickr;
  this.view = view;
  self = this;
  var urlString = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos" + "&api_key=" + this.flickr.apiKey + "&user_id=" + this.flickr.userID + "&format=json&jsoncallback=?"
  $.ajax({
      url:        urlString,
      dataType:   "jsonp",
      success:    function(data){
        self.photoGroup = new PhotoGroup(data);
        self.photoGroup.displayPhotos();
      }
  });
  self._bindEventListener()
}

PastagramController.prototype._bindEventListener = function(){
  var self = this;
  $('.view-sort').on('click', function(event){
    self.photoGroup.sortByViews();
  });

}

Pastagram = function() { new PastagramController(new Flickr()) }

Pastagram();