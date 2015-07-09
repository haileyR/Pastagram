function PastagramView() {}

PastagramView.prototype.displayPhotos = function(photoList) {
  var html = "";
  if (photoList.length > 0) {
    if (photoList[0].title != undefined) {
      for (var i=0; i < photoList.length; i++) {
        var photo = photoList[i];
        html += '<li><div class="img-container"><img alt="'+ photo.title + '"src="' + "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg\"/>" + '<div class="info">Title: ' + photo.title + '<br>Date Taken: ' + self.photoGroup.photoList[photo.id].dateTaken + '</div></div></div></li>';
      };
    } else {
      // popular
      for (var i=0; i < photoList.length; i++) {
        html += '<li><div class="img-container"><img alt="'+ photoList[i][1].title + '"src="' + photoList[i][1].url + '"/>' + '<div class="info"><i class="favorite icon"></i>' + photoList[i][1].views + 'views<br>Title: ' + photoList[i][1].title + '</div></div></div></li>';
      };
    }
    $('#photo-grid').empty();
        $('#photo-grid').append("<ul class=\"small-block-grid-1 medium-block-grid-2 large-block-grid-3\">" + html + "</ul>");
  } else {
    // default
    for (var id in photoList) {
      html += '<li><div class="img-container"><img alt="'+ photoList[id].title + '"src="' + photoList[id].url + '"/>' + '<div class="info">Title: ' + photoList[id].title + '</div></div></li>';
      $('#photo-grid').empty();
      $('#photo-grid').append("<ul class=\"small-block-grid-1 medium-block-grid-2 large-block-grid-3\">" + html + "</ul>");
    };
  }

}

