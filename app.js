const ui=new UI()
const ls=new LS()

const form=document.querySelector('#addBook')

form.addEventListener('submit', addBook)
document.addEventListener('DOMContentLoaded',getBooksFromLS)
document.addEventListener('click',delBook)

function delBook(event){
    if(event.target.textContent === 'x'){
        const book = ui.getBook(event.target)
        if(ui.delBook(event.target) === true){
            ls.delBook(book)
        }
    }
}

function getBooksFromLS(){
    let books=ls.getData('books')
    books.forEach(function (book){
        ui.addBook(book)
    })
}

function addBook(event){
    // get form input values
    const titleInput=document.querySelector('#title')
    const authorInput=document.querySelector('#author')
    const isbnInput=document.querySelector('#isbn')

    let title=titleInput.value
    let author=authorInput.value
    let isbn=isbnInput.value

    //create book
    const book=new Book(title,author,isbn)

    ui.addBook(book)

    ls.addBook(book)

    //delete input value from form input fields
    titleInput.value=''
    authorInput.value=''
    isbnInput.value=''
    event.preventDefault()
}