//separation of concerns, logical flow, abstracted away isolated sets
function rBookShelf(books){

// console.log(books)
const shelfInstance = new Bookshelf(books);
const shelf = document.querySelector('#bookshelf');
const bookBtn = document.querySelector('#book-button');
const favBtn = document.querySelector('#fav-button');
const sortBook = document.querySelector('#sort');
console.log(countBooks());
//TDD #1: counter using a for loop to display a book count on screen
function countBooks() {
//each increment of book in bookData array, increment count by 1 (book counter)
  let count = 0
  for(let i = 0; i < bookData.length; i++) {
    count ++;
  }
  return count;
  //attach to element or render to doc
}

shelf.append(`Book Count: ${countBooks()}`)
shelf.append(shelfInstance.render());

// console.log(shelf);

//form to add a new book to the shelf thats renders when "Add Book" button is clicked
//addBook grabs the 'add book' button
// const br = document.createElement("br");

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

  //push new book into shelf
  //render shelf
  console.log(newBook)
})
//append form to add book button???
// addBook.appendChild(form);
//button response for all buttons and sorting options that renders data according to selection by user
takeHome = () => {
  window.location.href="index.html"
}
bookBtn.addEventListener('click', () => {
  // shelfInstance.render();
  takeHome();
})
//if user clicks 'favorites', render only list of favorite books
favBtn.addEventListener('click', () => {
  shelfInstance.renderFav();
})

//Select Sort Option list function
//if user selects ascend sort render shelf in order A-Z
sortBook.addEventListener('change', () => {
  if (select.value === 'AlphabeticalAscend' ) {
  shelfInstance.alphabetAscend();
}
//if user selects descend sort render shelf in order Z-A
  if (select.value === 'AlphabeticalDescend' ) {
  shelfInstance.alphabetDescend();
}
//if user selects topics by #, render shelf by number of topics 
  if (select.value === 'topic' ) {
  shelfInstance.topic();
}
//if user selects Select Sort Option as sort option render whole shelf
  else {
  shelfInstance.render();
}


}
)}

rBookShelf(bookData);
setTimeout(() => {
  console.log('foo')
  rBookShelf(bookData)
},5000)
// console.log(bookData);

















// //create form element
// const form = document.createElement("form");
// //create input element new book title 
// const nbtitle = document.createElement("input"); 
//   nbtitle.setAttribute("type", "text");
//   nbtitle.setAttribute("name", "title");
//   nbtitle.setAttribute("placeholder", "Title");
// //new book author
// const nbauthor = document.createElement("input"); 
//   nbauthor.setAttribute("type", "text");
//   nbauthor.setAttribute("name", "Author");
//   nbauthor.setAttribute("placeholder", "Author");
// //new book subject
// const nbsubject = document.createElement("input"); 
//   nbsubject.setAttribute("type", "text");
//   nbsubject.setAttribute("name", "Subject");
//   nbsubject.setAttribute("placeholder", "Subject(s)");
// //new book language
// const nblanguage = document.createElement("input"); 
//   nblanguage.setAttribute("type", "text");
//   nblanguage.setAttribute("name", "language");
//   nblanguage.setAttribute("placeholder", "language");
//   //submit button 
// const submitbook = document.createElement("input");
// submitbook.setAttribute("type", "submit");
// submitbook.setAttribute("value", "Submit"); 
// //append inputs to form
// form.appendChild(nbtitle);
// form.appendChild(nbauthor);
// form.appendChild(nbsubject);
// form.appendChild(nblanguage);
// // form.appendChild(submitbook);

