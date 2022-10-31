function rBookShelf(books){

const shelfInstance = new Bookshelf(books);
const shelf = document.querySelector('#bookshelf')
const bookBtn = document.querySelector('book-button')
const favBtn = document.querySelector('fav-button')
const sortBook = document.querySelector('sort')

console.log(shelfInstance);
shelf.append(shelfInstance.render());

console.log(shelf);
// return shelf;
//create button response for all buttons and sorting options
bookBtn.addEventListener('click', () => {
  shelfInstance.render();
})

favBtn.addEventListener('click', () => {
  shelfInstance.renderFav();
})

sortBook.addEventListener('change', () => {
  if (select.value === 'AlphabeticalAscend' ) {
  shelfInstance.alphabetAscend();
}
  if (select.value === 'AlphabeticalDescend' ) {
  shelfInstance.alphabetDescend();
}
  if (select.value === 'topic' ) {
  shelfInstance.topic();
}

  else {
  shelfInstance.renderFav();
}


}
)}
rBookShelf(bookData);
// console.log(bookData);



