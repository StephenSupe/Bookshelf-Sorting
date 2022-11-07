
class Bookshelf {
  constructor(books = []) {
    this.favorite = [];
    this.books = books;
    this.subject = Book.subject
  } 
    addBook (book) {
      this.books.push(book);
    };
    //function to add book to favorites array
    addFavorite(book) {
      this.favorite.push(book);
    }
    // create sort by number of topics/subjects
    
  //   topic(){
  //    //compare the values of subject, books are sorted by number of topics
  //     this.books.sort((a, b) => {
  //       //if value of book subject a is less than b 
  //       if(a.subject > b.subject) {
  //         return 1;
  //       } 
  //       else {
  //         return -1;
  //       }
  //       });

  //       this.books.push(this.topic);
  //     }

  //   sort () {
  // // create a sort alphabetically A-Z
  //   alphabetAscend()
  //     this.books.sort((a, b) => {
  //       if(a.title < b.title) {
  //         return -1;
  //        }
  //       else {
  //         return +1;
  //       }
  //   })
  // }
     
  // //sorted list from Z-A 
  //   alphabetDescend(){
  //     this.books.sort((a, b) => {
  //       if(a.title < b.title) {
  //         return 1;
  //       }
  //       else {
  //         return -1;
  //     }
  //     })
  //   }
    
    render () {
      const ul = document.createElement("ul");
  //refactor Bookshelf using map
      this.books.map((book) => {
        const newBook = new Book(book.author, book.language, book.subject, book.title)
        ul.append(newBook.render());
        const addToFavoriteBtn = document.createElement('button');
    
        addToFavoriteBtn.innerHTML = 'add to list of favorites';
        addToFavoriteBtn.id = 'addToFavButton'
        addToFavoriteBtn.style.width ="15%" ;
        addToFavoriteBtn.addEventListener('click', () => {
          if(!this.favorite.includes(newBook)) this.addFavorite(newBook);
          this.render();
        })
        ul.append(addToFavoriteBtn)
      })

      return ul;
    };
//render favorites, map through each book with added : favorite 
 renderFav () {
    const shelf = document.querySelector('#bookshelf');
    shelf.innerHTML = '';
    this.favorite.map((book) =>{ 
      shelf.append(book.render());
    })
//create element with sum of favorite books displayed
const favCount = document.querySelector('#favcount');
const sumFav = this.books.reduce((prev, current) =>{ prev + 1
    }, 0); 
//set favCount inner text as a string with total number of favorite books
favCount.innerHTML = `Total Favorites: ${this.books.sumFav}`;

  }
}
