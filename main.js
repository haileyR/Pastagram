flickr = new Flickr();
flickr.getData({method: 'flickr.people.getPublicPhotos', user_id: true, jsoncallback: 'init'});

function init(data){
  group = new PhotoGroup(data);
  group.displayPhotos();
}