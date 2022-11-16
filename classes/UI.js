class UI{
    addBook(book){
        const tr=document.createElement('tr');
        for(let name in book){
            let td=document.createElement('td')
            let text=document.createElement(book[name])
            td.appendChild(text)
            tr.appendChild(td)
        }
        let td=document.createElement('td')
        const link=document.createElement('a')
        link.setAttribute('href','#')
        link.appendChild(document.createElement('x'))
        td.appendChild(link)
        tr.appendChild(td)
        const bookList=document.querySelector('#book-list')
        bookList.appendChild(tr)
    }
}