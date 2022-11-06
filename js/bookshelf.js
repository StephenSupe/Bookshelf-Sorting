//separation of concerns, logical flow, abstracted away isolated sets

class Bookshelf {
  constructor(books = []) {
    this.favorite = [];
    this.books = books;
    // this.bookCount = this.countBooks(this.books)
    // this.nonEnglishCount = this.countForeign(this.books)
    // this.avgTopics = this.countAvgSubj(this.books)
  }
    // countBooks() {
    //   let count = 0
    //   for(let i = 0; i < this.books.length; i++) {
    //     count ++;
    //   }
    //   return count;
    //   //attach to element or render to doc
    // }
    
    //TDD#2 use reduce, count total number of non-english books 
 
    // countForeign() {
    //   this.books.reduce((counter, book) => {
    //     //if value of language in book does not equal 'en', increase count by 1
    //     if (book.language !== 'en') counter += 1
    //     return counter;
    //   }, 0);
    // }
  
  //TDD#3 Average number of topics
    // countAvgSubj() {
    //   let totalSubjects = 0
    //   this.books.forEach(book => totalSubjects += book.subject.length())
    //   console.log(totalSubjects)
    //   return totalSubjects / this.books.length()
    // }
    // addnonEnglishCount (book) {
    //   this.nonEnglishCount.push(book);
    // };

  
    addBook (book) {
      this.books.push(book);
    };
    //function to add book to favorites array
    addFavorite(book) {
      this.favorite.push(book);
    }
    // create sort by number of topics/subjects
    topic(){
      // console.log(this.topic); 
      books.sort((a, b) => {
        if(a.subject.length > b.subject.length) {
          return 1;
        } 
        else {
          return -1;
        }
        })

        this.books.push(this.topic);
      }

    sort () {
  // create a sort alphabetically A-Z
    alphabetAscend()
      this.books.sort((a, b) => {
        if(a.title > b.title) {
          return 1;
         }
        else {
          return -1;
        }
    })
      this.sort();
  }
     
  //sorted list from Z-A 
    alphabetDescend(){
      this.books.sort((a, b) => {
        if(a.title < b.title) {
          return 1;
        }
        else {
          return -1;
      }
      })
// console.log(alphabetDescend);
    }
    
    // createLikeBtn () {
    //   const addToFavoriteBtn2 = document.getElementById('addToFavButton');
    //   console.log(addToFavoriteBtn2)
    //   addToFavoriteBtn2.addEventListener('click', ()=> {
    //     console.log("clicked")
    //     if(!this.favorite.includes(book)) this.addFavorite(book);
    //   })
    //   return addToFavoriteBtn2
    // }

      // this.render()
    render () {
      const ul = document.createElement("ul");
  //refactor Bookshelf using map
      this.books.map((book) => {
        const newBook = new Book(book.author, book.language, book.subject, book.title)
        ul.append(newBook.render());
        const addToFavoriteBtn = document.createElement('button');
        // const commentBtn = document.createElement('button');
        // const sendBtn = document.createElement('button');
        // addToFavoriteBtn.setAttribute("id", "addToFavButton")
        addToFavoriteBtn.innerHTML = 'add to list of favorites';
        // commentBtn.innerHTML = 'Add Comment'
        // sendBtn.innerHTML = 'Send'
        addToFavoriteBtn.id = 'addToFavButton'
        addToFavoriteBtn.style.width ="15%" ;
        addToFavoriteBtn.addEventListener('click', () => {
          // console.log("clicked")
          if(!this.favorite.includes(newBook)) this.addFavorite(newBook);
          this.render();
        })


        // let textArea = this.createCommentSection()
        // textArea.style.display = 'none'
        // sendBtn.style.display = 'none'
        // commentBtn.addEventListener('click', () => {
        //   textArea.style.display = '';
        //   sendBtn.style.display = '';
        // })

        // sendBtn.addEventListener('click', () => {
        //   let comment = textArea.value;
        //   newBook.comment.push(comment);
        //   // this.renderComment(newBook);
        //   console.log(newBook)
        //   newBook.render()
        // })

        // console.log(addToFavoriteBtn)
        ul.append(addToFavoriteBtn)
        // ul.append(commentBtn)
        // ul.append(textArea)
        // ul.append(sendBtn)
      // ul.append(newBook);
      })

      // console.log(ul);
      return ul;
    };
//render favorited books to dom
; renderFav () {
    const shelf = document.querySelector('#bookshelf');
    shelf.innerHTML = '';
    console.log(this.favorite)
    this.favorite.map((book) =>{ 
      // const book = book.render();
      console.log(book);
      shelf.append(book.render());
      // console.log(shelf)
    })
//create element with sum of favorite books displayed, use reduce
const favCount = document.querySelector('#favcount');
const sumFav = this.books.reduce((prev, current) =>{ prev + 1
}, 0); 
favCount.innerHTML = `Total Favorites: ${this.books.sumFav}`
console.log(favCount)
}

// createCommentSection () {
//   let textArea = document.createElement('textarea')
//   textArea.maxLength = 280
//   return textArea
// }
// console.log(sumFav);


}
// console.log(this.books(countBooks));
// console.log(this.nonEnglishCount);