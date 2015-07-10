function PastagramController(flickr, view){
  "use strict";
  this.flickr = flickr;
  this.view = view;
  self = this;
  var urlString = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos" + "&api_key=" + this.flickr.apiKey + "&user_id=" + this.flickr.userID + "&format=json&jsoncallback=?";
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
  "use strict";
  var self = this;
  $('#view-sort').on('click', function(event){
    self.photoGroup.sortByViews();
  });
  $('#recent-sort').on('click', function(event){
    self.photoGroup.sortBy("date-posted-desc");
  });
  $('#interest-sort').on('click', function(event){
    self.photoGroup.sortBy("interestingness-desc");
  });
};

function Pastagram() {
  "use strict";
  new PastagramController(
    new Flickr(),
    new PastagramView()
  );}
new Pastagram();

