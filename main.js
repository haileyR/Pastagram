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
        self.view.displayPhotos(self.photoGroup.photoList);
      }
  });
  self._bindEventListener();
}

PastagramController.prototype._bindEventListener = function(){
  var self = this;
  $('#view-sort').on('click', function(event){
    self.photoGroup.sortByViews();
  });
  $('#recent-sort').on('click', function(event){
    self.photoGroup.sortByDateTaken();
  });
  $('#interest-sort').on('click', function(event){
    self.photoGroup.sortByInterestingness();
  });
}

Pastagram = function() {
  new PastagramController(
    new Flickr(),
    new PastagramView()
  )}

Pastagram();