class LS{
    //help functions
    getData(name){
        let data
        if (localStorage.getItem(name) === null){
            data=[]
        } else{
            data=JSON.parse(localStorage.getItem(name))
        }
        return data
    }
    setData(name,data){
        localStorage.setItem(name,JSON.stringify(data))
}
    addBook(book){
    let books=this.getData('books')
        books.push(book)
        this.setData('books',books)
    }
    delBook(book){
        let books = this.getData('books')
        books.forEach(function(bookLS, index){
            if(bookLS.title === book.title && bookLS.author === book.author && bookLS.isbn === book.isbn){
                books.splice(index, 1)
            }
        })
        this.setData('books', books)
    }
}