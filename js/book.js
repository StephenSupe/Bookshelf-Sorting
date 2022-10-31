class Book {
  constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
  }


render(){
  //favorite button
  const favoriteBtn = document.createElement('button');
  favoriteBtn.innerHTML = 'add to list of favorites';
  favoriteBtn.style.width ="15%" ;
  // console.log(document);
  const book = document.createElement('li');
  // book.style.border = '1px', 'solid', 'black';
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
  console.log(this.subject)  
    for(const sub of this.subject){
    const subElm = document.createElement('li');
    subElm.innerHTML = sub;
    Subject.append(subElm);
    }
    subjectwrapper.append(Subject)
    bookInfo.append(subjectwrapper)
    book.append(bookInfo)
    book.append(favoriteBtn);
  
  return book;
}



}
// let book1 = new Book('j.k. rowling', 'en', ['math', 'science'], 'harry potter' );
// console.log(book1);
// book1.render();