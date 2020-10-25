const books = [
    {
        bookName: "The Nature of Software Development",
        author: "Ron Jeffries",
        coverURL:
            "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
    },
    {
        bookName: "Clean Code",
        author: "Robert Cecil Martin",
        coverURL: "https://images-na.ssl-images-amazon.com/images/I/41-+g1a2Y1L._SX375_BO1,204,203,200_.jpg"
    }
]
//create ul 
const ul = document.createElement('ul');
document.body.appendChild(ul); //appen it to body
function injectBooksToDOM(array) {   
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    array.map(function (book) {
        const title = document.createElement('p');
        const authorName = document.createElement('p');
        const list = document.createElement('li');
        const bookImage = document.createElement('img');
        bookImage.src = book.coverURL;
        title.innerText = book.bookName;
        authorName.innerText = book.author;
        list.appendChild(title);
        // list.appendChild(authorName);
        list.appendChild(bookImage);
        ul.appendChild(list);
    });
}
injectBooksToDOM(books);