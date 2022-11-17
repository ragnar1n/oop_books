class UI{
    addUIElement(name, classname='', textcontent='', attributes={}){
        //create element
        const element=document.createElement(name)
        //add css style class
        if (classname !==''){
            element.className=classname
        }
        //add text content
        element.appendChild(document.createTextNode(textcontent))
        //add attributes
        if (Object.keys(attributes).length>0){
            for (let key in attributes){
                element.setAttribute(key,attributes[key])
            }
        }
        return element
    }
    addBook(book){
        const tr=this.addUIElement('tr')
        for(let name in book){
            let td=this.addUIElement('td','',book[name],{})
            tr.appendChild(td)
        }
        let td=this.addUIElement('td')
        const link=this.addUIElement('a','','x',{href:'#'})
        td.appendChild(link)
        tr.appendChild(td)
        const bookList=document.querySelector('#book-list')
        bookList.appendChild(tr)
    }
    getBook(bk){
        let isbn = bk.parentElement.previousElementSibling.textContent
        let author = bk.parentElement.previousElementSibling.previousElementSibling.textContent
        let title = bk.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        const book = new Book(title, author, isbn)
        return book
    }
    delBook(bk) {
        if (confirm('Are you sure?')) {
            bk.parentElement.parentElement.remove()
            return true
        }else{
            return false
        }
    }
}
