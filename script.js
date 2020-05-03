const newBook = document.querySelector('.new-book')
const showBook = document.querySelector('.show-book')
const addBook = document.querySelector('.add-book')
const containerNew = document.querySelector('.container-new')
const cancelAdd = document.querySelector('.cancel-add')

newBook.addEventListener('click', () => {
    containerNew.classList.toggle('hide')
})

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

function render() {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    const valread = document.querySelector('#read')
    let read = ''

    if(valread.checked == true) {
        read = 'Read'
    } else {
        read = 'Not read'
    }

    addBookToLibrary(title, author, pages, read)
    createCard()
}

function createCard() {
    myLibrary.forEach((val) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'text-white text-center card bg-info mb-3')
        card.innerHTML = `<h3 class="card-header text-capitalize">${val.title}</h3>
                        <p class="top text-capitalize">${val.author}</p>
                        <p>${val.pages} pages</p>
                        <p class="val-read">${val.read}</p>
                        <div class="footer">
                            <svg class="bi bi-eye bi-eye-normal" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" clip-rule="evenodd"/>
                            </svg>
                            <svg class="bi bi-trash del" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                            </svg>
                        </div>`  
        showBook.appendChild(card)
    })
}

addBook.addEventListener('click', () => {
    render()
    emptyAll() 
    deleteCard()
    containerNew.classList.toggle('hide')
})

function emptyAll() {
    myLibrary = []
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#pages').value = ''
}


cancelAdd.addEventListener('click', () => {
    emptyAll()
    containerNew.classList.toggle('hide')
})

function deleteCard() {
    const del = document.querySelectorAll('.del')

    del.forEach((delCard) => {
        delCard.addEventListener('click', () => {
            if(delCard.parentNode.parentNode.parentNode !== null) {
                delCard.parentNode.parentNode.parentNode.removeChild(delCard.parentNode.parentNode)
            }
        })
    })
}


function exampleCard() {
    myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', '295', "Read"))
    createCard()
    emptyAll()
    deleteCard()
}

exampleCard()

