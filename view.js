function PastagramView() {}

PastagramView.prototype.displayPhotos = function(photoList) {
  var html = "";
  if (photoList.length > 0) {
    if (photoList[0].title != undefined) {
      for (var i=0; i < photoList.length; i++) {
        var photo = photoList[i];
        html += '<li><img alt="'+ photo.title + '"src="' + "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg" + '"/>' + '</li>';
        $('#photo-grid').empty();
        $('#photo-grid').append("<ul>" + html + "</ul>");
      };
    } else {
      for (var i=0; i < photoList.length; i++) {
        html += '<li><img alt="'+ photoList[i][1].title + '"src="' + photoList[i][1].url + '"/>' + '</li>';
        $('#photo-grid').empty();
        $('#photo-grid').append("<ul>" + html + "</ul>");
      };
    }
  } else {
    for (var id in photoList) {
      html += '<li><div class="img-container"><img alt="'+ photoList[id].title + '"src="' + photoList[id].url + '"/>' + '</div></li>';
      $('#photo-grid').empty();
      $('#photo-grid').append("<ul>" + html + "</ul>");
    };
  }

}