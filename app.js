const API_URL = "https://6ae2c687bbb54129229a62b1.mockapi.io/books";
 
let books = [];
 
async function loadBooks() {
    const response = await fetch(API_URL);
 
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
 
    books = await response.json();
    renderBooks(books);
}
 
function renderBooks(list) {
    const bookList = document.getElementById("bookList");
    bookList.replaceChildren();
 
    list.forEach(book => {
        const li = document.createElement("li");
 
        const info = document.createElement("span");
        info.textContent = `${book.title} / ${book.author} (${book.year}) - ${book.genre}, 평점 ${book.rating}`;
 
        li.appendChild(info);
        bookList.appendChild(li);
    });
}
 
loadBooks();