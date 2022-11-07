class Book {
  constructor(author, language, subject, title,) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.comments = []
    //TDD Alternate #4 (generate random page number and assign category to each book)
    this.numPages = Math.floor(Math.random() * 301); //generate random page number for each book
    //if page number is > 100 assign novel, else assign short story as category (pages < 100)
    this.category = this.numPages > 100 ? 'novel' : 'short story'
    this.commentSection = document.createElement('ul')
  }

render(){
  const book = document.createElement('li');

  const bookInfo = document.createElement('ul');

  const Title = document.createElement('li');

  Title.innerHTML = `Title: ${this.title}`;
  bookInfo.append(Title)

  //create list item for author of each book and append to bookinfo ul
  const Author = document.createElement('li'); 
  Author.innerHTML = `Author: ${this.author}`;
  bookInfo.append(Author)

  //li for lang append to bookinfo ul
  const Language = document.createElement('li');
  Language.innerHTML = `Language: ${this.language}`;
  bookInfo.append(Language)

  //create another ul of subjects within bookinfo
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

//create button element and page text
  const commentBtn = document.createElement('button');
  commentBtn.style.width = '17%'
  const sendBtn = document.createElement('button');
  commentBtn.innerHTML = 'Add Comment'
  sendBtn.innerHTML = 'Send'
  

//create a comment section with click event to display textarea/send
  let textArea = this.createCommentSection()
  textArea.style.display = 'none'
  sendBtn.style.display = 'none'
  commentBtn.addEventListener('click', () => {
    textArea.style.display = '';
    sendBtn.style.display = '';
  })

//sendbtn adds value in comment area to comments of book
  sendBtn.addEventListener('click', () => {
    let comment = textArea.value;
    this.comments.push(comment);
    this.renderComments();
  })

//create a list item for the sublist of subjects created, appending the li to that ul
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
    book.append(`Comments:`)
    book.append(this.commentSection)
      return book;
  }

  //comment section text area set to 280 max characters
  createCommentSection () {
    const textArea = document.createElement('textarea')
    textArea.maxLength = 280
    return textArea
  }

//render the comments, grabs the last comment and creates a list item. append comment to commentSection
  renderComments () {
    let comment;
    this.comments.length >= 1 ? comment = this.comments[this.comments.length -1] : comment = 'No commments'
    const commentEl = document.createElement('li');
    commentEl.innerHTML = comment;
    this.commentSection.append(commentEl);
  }
}