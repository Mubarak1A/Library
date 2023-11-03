const myLibrary = [];

function Book(title, author, noPages) {
    this.title = title,
    this.author = author,
    this.noPages = noPages,
    this.read = false
}

function addBookToLibrary(){
    let title = prompt('What the title of your book');
    let author = prompt('Who is the author of the book');
    let noPages = prompt('What is the number of pages in the book');

    let book = new Book(title, author, noPages);

    myLibrary.push(book);
}