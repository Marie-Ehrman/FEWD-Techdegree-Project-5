//Load gallery using baguetteBox
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

// const search = new Filter('search', 'data-caption');

//  VARIABLES
const gallery = document.querySelector('.gallery')
const photos = gallery.children
const searchInput = document.querySelector('#search');

//SEARCH INPUT EVENT LISTENER
searchInput.addEventListener('keyup', e => {

  for (let i = 0; i < photos.length; i++){
      photos[i].style.display = 'none';
    const caption = photos[i].getAttribute('data-caption');
    if(caption.includes(e.target.value)){
      photos[i].style.display = '';
    }     
  }



  
});