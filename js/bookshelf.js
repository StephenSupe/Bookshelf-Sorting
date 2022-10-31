class Bookshelf {
  constructor(books = []) {
    this.favorite = [];
    this.books = books;
  }
  
    addBook (book) {
      this.books.push(book);
    };
    addFavorite(book) {
      this.favorite.push(book);
    }
    // create sort by number of topics/subjects
    topic(){
      console.log(this.topic) 
      books.sort((a, b) => {
        if(a.subject.length > b.subject.length) {
          return 1;
        } 
        else {
          return -1;
        }
        })

        this.books.push(this.topic);
      
    render();
  // create a sort alphabetically A-Z
    alphabetAscend(){
      this.books.sort((a, b) => {
        if(a.title > b.title) {
          return 1;
         }
        else {
          return -1;
        }
    })
    }
      this.render();
    }

    alphabetDescend(){
      this.books.sort((a, b) => {
        if(a.title < b.title) {
          return 1;
        }
        else {
          return -1;
      }
      })
    }
      // this.render();
    
    
  
 
    render () {
      const ul = document.createElement("ul");
  //refactor Bookshelf using map
      this.books.map((book) => {
        const newBook = new Book(book.author, book.language, book.subject, book.title)
        ul.append(newBook.render());
      const favoriteBtn = book.querySelector('button');
      favoriteBtn.addEventListener('click', ()=> {
        if(!this.favorite.includes(book)) this.addFavorite(book);
      })
      shelf.append(book);
      })

      console.log(ul)
      return ul;
    };
  }
  renderFav () {
    const shelf = document.querySelector('#bookshelf');
    shelf.innerHTML = '';
    this.favorite.map((book) =>{ 
      const book = book.render();
      shelf.append(book);
    })
//create element with sum of favorite books displayed, use reduce
const favCount = document.getElementById('#favcount');
favCount.textContent = "Total Favorites:";
const sumFav = books.reduce((p, c) =>{ p + 1
}, 0); 
  sumFav(favCount);
}


 
