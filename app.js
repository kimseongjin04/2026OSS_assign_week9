const API_URL = "https://6ae2c687bbb54129229a62b1.mockapi.io/books";
 
let books = [];
const form = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const genreInput = document.getElementById("genre");
const ratingInput = document.getElementById("rating");
 
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
async function addBook(book) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });
 
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
 
    await loadBooks();
}
 
form.addEventListener("submit", async (event) => {
    event.preventDefault();
 
    const book = {
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        year: Number(yearInput.value),
        genre: genreInput.value,
        rating: Number(ratingInput.value)
    };
 
    try {
        await addBook(book);
        form.reset();
    } catch (error) {
        console.error(error);
    }
});
 
loadBooks();