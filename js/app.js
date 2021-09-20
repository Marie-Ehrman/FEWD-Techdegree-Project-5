//Load gallery using baguetteBox
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

//  VARIABLES
const gallery = document.querySelector('.gallery')
const photos = gallery.children
const searchInput = document.querySelector('#search');


//SEARCH INPUT EVENT LISTENER
searchInput.addEventListener('keyup', e => {

  //loop over all photos
  for (let i = 0; i < photos.length; i++){
    //read user input
    const userInput = e.target.value.toLowerCase();
    //get photo caption for search text
    const caption = photos[i].getAttribute('data-caption');
    //initially hide all photos when user types in search
    photos[i].style.display = 'none';
    //if the caption includes the user's input display the photo
    if(caption.includes(userInput)){
      photos[i].style.display = '';
    }
  }
});