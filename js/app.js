//Load gallery using baguetteBox
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

// const search = new Filter('search', 'data-caption');

//  VARIABLES
const gallery = document.querySelector('.gallery')
const photos = gallery.children
console.log(photos)

const searchInput = document.querySelector('#search');

//SEARCH INPUT EVENT LISTENER
searchInput.addEventListener('keyup', e => {
  let matches = '';

  for (let i = 0; i < photos.length; i++){

    const caption = photos[i].getAttribute('data-caption');
    if(caption.includes(e.target.value)){
      console.log(photos[i])
      matches += `${photos[i]}`
    }     
    console.log(matches)
  }
  
// gallery.innerHTML = matches
});