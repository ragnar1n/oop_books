const ui=new UI()
const ls=new LS()

const form=document.querySelector('#addBook')

form.addEventListener('submit', addBook)

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

    // tr.innerHTML=`
    // <td>${titleInput.value}</td>
    // <td>${authorInput.value}</td>
    // <td>${isbnInput.value}</td>
    // <td><a class="secondary-content" href="#">x</a></td>`
    //
    //
    // addBookToLS([titleInput.value,authorInput.value,isbnInput.value])
    //
    // bookList.appendChild(tr)


    //delete input value from form input fields
    titleInput.value=''
    authorInput.value=''
    isbnInput.value=''
    event.preventDefault()
}