function PastagramView() {}

PastagramView.prototype.displayPhotos = function(photoList) {

  var html = "";
  if (photoList.length > 0) {
    for (var i=0; i < photoList.length; i++) {
      html += '<li><img alt="'+ photoList[i][1].title + '"src="' + photoList[i][1].url + '"/>' + '</li>';
    };
  }else {
    for (var id in photoList) {
      html += '<li><img alt="'+ photoList[id].title + '"src="' + photoList[id].url + '"/>' + '</li>';
    };
  }
  $('#photo-grid').empty();
  $('#photo-grid').append("<ul class=\"small-block-grid-2 medium-block-grid-3 large-block-grid-4\">" + html + "</ul>");
}