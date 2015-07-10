function PastagramView() {
  "use strict";
}

PastagramView.prototype.displayPhotos = function(photoList) {
  "use strict";
  var html = "";
  if (photoList.length > 0) {
    if (photoList[0].title !== undefined) {
      for (var i=0; i < photoList.length; i++) {
        var photo = photoList[i];
        html += '<li><div class="img-container"><img alt="'+ photo.title + '"src="' + "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg\"/>" + '<div class="info"><i class="favorite icon"></i>' + self.photoGroup.photoList[photo.id].views + 'views<br>Title: ' + photo.title + '<br>Date Taken: ' + self.photoGroup.photoList[photo.id].dateTaken + '</div></div></div></li>';
      }
    } else {
      // popular
      for (var j=0; j < photoList.length; j++) {
        html += '<li><div class="img-container"><img alt="'+ photoList[j][1].title + '"src="' + photoList[j][1].url + '"/>' + '<div class="info"><i class="favorite icon"></i>' + photoList[j][1].views + 'views<br>Title: ' + photoList[j][1].title + '</div></div></div></li>';
      }
    }
    $('#photo-grid').empty();
        $('#photo-grid').append("<ul class=\"small-block-grid-1 medium-block-grid-2 large-block-grid-3\">" + html + "</ul>");
  } else {
    // default
    for (var id in photoList) {
      html += '<li><div class="img-container"><img alt="'+ photoList[id].title + '"src="' + photoList[id].url + '"/>' + '<div class="info">Title: ' + photoList[id].title + '</div></div></li>';
      $('#photo-grid').empty();
      $('#photo-grid').append("<ul class=\"small-block-grid-1 medium-block-grid-2 large-block-grid-3\">" + html + "</ul>");
    }
  }
};

