
function rBookShelf(books){

const shelfInstance = new Bookshelf(books);
const shelf = document.querySelector('#bookshelf');
const bookBtn = document.querySelector('#book-button');
const favBtn = document.querySelector('#fav-button');
const sortBooks = document.querySelector('#sort');
const bookCounter = document.querySelector('#bookcount');

//TDD #2
document.getElementById('nonenglish').innerHTML = `Foreign language book Count:${books.reduce(foreignCounter, 0)}`;
function foreignCounter (total, book) {
  //if value of language in book does not equal 'en', increase count by 1
  if (book.language !== 'en') total += 1;
    return total;
}

//TDD #1: counter using a for loop to display a book count on screen
function countBooks() {
//each increment of book in bookData array, increment count by 1 (book counter) and return total count
  let count = 0
  for(let i = 0; i < bookData.length; i++) {
    count ++;
  }
  return count;
}
//final count of total books set as a string and added to the page
bookCounter.innerHTML = (`Book Count: ${countBooks()}`)
shelf.append(shelfInstance.render());

//form to add a new book to the shelf thats renders when "Add Book" button is clicked
//addBook grabs the 'add book' button
const addBook = document.getElementById('createbook');
//get input values by ids, populate new book with values
nbauthor = document.getElementById("form_author");
nblanguage = document.getElementById("form_language");
nbsubject = document.getElementById("form_subject");
nbtitle = document.getElementById("form_title");

addBook.addEventListener(('click'), () => {  
  const newBook = new Book(nbauthor.value, nblanguage.value, nbsubject.value, nbtitle.value)
  bookData.push(newBook);
  rBookShelf(books);
  //push new book into shelf instance
  //render shelf new book is added to list
})
//redirect browser
takeHome = () => {
  window.location.href="index.html"
}
//button response for all buttons and sorting options that renders data according to selection by user
bookBtn.addEventListener('click', () => {
  takeHome();
})
//if user clicks 'favorites', render only list of books added to the favorite list
favBtn.addEventListener('click', () => {
  shelfInstance.renderFav();
})

//Select Sort Option list function
//if user selects ascend sort render shelf in order A-Z
// let select = document.querySelector('select')
sortBooks.addEventListener('change', () => {
  let select = document.querySelector('select')
  if (select.value === 'AlphabeticalAscend' ) {
  shelfInstance.alphabetAscend();
}
//if user selects descend sort, render shelf in order Z-A
  if (select.value === 'AlphabeticalDescend' ) {
  shelfInstance.alphabetDescend();
}
//if user selects topics by #, render shelf by number of topics 
  if (select.value === 'topic' ) {
  shelfInstance.topic();
}
//if user selects Select Sort Option as sort option render base shelf
  else {
  shelfInstance.render();
    }
  }
)}

rBookShelf(bookData);

