class Book {
  constructor(author, language, subject, title,) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.comment = []
    //TDD Alternate #4 (generate random page number and assign category to each book)
    this.numPages = Math.floor(Math.random() * 101); //generate random page number for each book
    //if page number is > 100 assign novel, else assign short story as category
    this.category = this.numPages > 100 ? 'novel' : 'short story'
  }


render(){
  const book = document.createElement('li');
  const bookInfo = document.createElement('ul');
  const Title = document.createElement('li');
  Title.innerHTML = `Title: ${this.title}`;
  bookInfo.append(Title)
  
  const Author = document.createElement('li'); 
  Author.innerHTML = `Author: ${this.author}`;
  bookInfo.append(Author)

  const Language = document.createElement('li');
  Language.innerHTML = `Language: ${this.language}`;
  bookInfo.append(Language)
  const subjectwrapper = document.createElement('li');
  const Subject = document.createElement('ul');
        Subject.innerHTML = 'Subjects:'  
 //TDD alternate #4, create list element and append random number of pages from 1-100
  const NumberPages = document.createElement('li');
  NumberPages.innerHTML = `number of pages: ${this.numPages}`;
  bookInfo.append(NumberPages);
  //create list item and append to book info
  const category = document.createElement('li');
  category.innerHTML = `Category: ${this.category}`;
  bookInfo.append(category);

  

  const commentBtn = document.createElement('button');
  const sendBtn = document.createElement('button');
  commentBtn.innerHTML = 'Add Comment'
  sendBtn.innerHTML = 'Send'

  let textArea = this.createCommentSection()
  textArea.style.display = 'none'
  sendBtn.style.display = 'none'
  commentBtn.addEventListener('click', () => {
    textArea.style.display = '';
    sendBtn.style.display = '';
  })

  sendBtn.addEventListener('click', () => {
    let comment = textArea.value;
    this.comment.push(comment);
    console.log(this.comment)
    this.render()
  })

    for(const sub of this.subject){
    const subElm = document.createElement('li');
    subElm.innerHTML = sub;
    Subject.append(subElm);
    }
    subjectwrapper.append(Subject)
    bookInfo.append(subjectwrapper)
    book.append(bookInfo)
    book.append(commentBtn)
    book.append(textArea)
    book.append(sendBtn)
    book.append(`Comments: ${this.comment.map(comment => comment)}`)

    // book.append(addToFavoriteBtn);
    // this.renderComment()
  
  return book;
  }

  // renderComment(book){
  //   book.append(`Comments: ${this.comment.map(comment => comment)}`)
  // }


  createCommentSection () {
    let textArea = document.createElement('textarea')
    textArea.maxLength = 280
    return textArea
  }
}//end off book class

// let book1 = new Book('j.k. rowling', 'en', ['math', 'science'], 'harry potter' );
// console.log(book1);
// book1.render();