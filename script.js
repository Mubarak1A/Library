const myLibrary = [];

function Book(title, author, noPages, read) {
    this.title = title,
    this.author = author,
    this.noPages = noPages,
    this.read = read
}

function addBookToLibrary(title, author, noPages, read){
    let book = new Book(title, author, noPages, read);

    myLibrary.push(book);
}

function addBookToTable(){
    //step = 1;
   // while (step < myLibrary.length()) {
        let newRow = document.createElement('tr');
        let rowTitle = document.createElement('td');
        let rowAuthor = document.createElement('td');
        let rowPagesNo = document.createElement('td');
        let rowCheck = document.createElement('td');

        rowTitle.textContent = myLibrary[0].title;
        rowAuthor.textContent = myLibrary[0].author;
        rowPagesNo.textContent = myLibrary[0].noPages;
        rowCheck.textContent = myLibrary[0].read;

        newRow.appendChild(rowTitle);
        newRow.appendChild(rowAuthor);
        newRow.appendChild(rowPagesNo);
        newRow.appendChild(rowCheck);

        booksList = document.getElementById('books-list');
        booksList.appendChild(newRow);
    //}
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
    form = document.getElementById('form');
    form.showModal();
})

const submitBtn = document.getElementById('submit-book-btn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    title = document.getElementById('title');
    author = document.getElementById('author');
    noPages = document.getElementById('noPages');
    read = document.getElementById('read');

    title = title.value;
    author = author.value;
    noPages = noPages.value;
    read = read.checked ? true : false

    if ((!title) || (!author) || (!noPages)) {
        errAlert = document.getElementById('error-alert');
        errAlert.showModal();
        setTimeout((() => {
            errAlert.close();
        }), 3000);
    } else {
        addBookToLibrary(title, author, noPages, read);
        form.close();
        
        addBookToTable();

        addAlert = document.getElementById('add-alert');
        addAlert.showModal();
        setTimeout((() => {
            addAlert.close();
        }), 3000);
    }
})

const myBooks = document.getElementById('my-books');
myBooks.addEventListener('click', () => {
    booksList = document.getElementById('books-list');
    booksList.classList.add('visible');
})
