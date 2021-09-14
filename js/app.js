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
  let noMatches = false;

  for (let i = 0; i < photos.length; i++){
      
      const userInput = e.target.value.toLowerCase();
      const caption = photos[i].getAttribute('data-caption');

      photos[i].style.display = 'none';
      
    if(caption.includes(userInput)){
      photos[i].style.display = '';
      noMatches = false;
    } else {
      noMatches = true;
    }
  }

  // if(noMatches) {
  //   console.log("NO MATCHES")
  //   const noResults = document.createElement('p');
  //   noResults.innerHTML = `No Search Results Were Found. Try Another Input`;
  //   gallery.insertAdjacentHTML('afterbegin', noResults);
  // } else {
  //   noResults.remove();
  // }



  
});