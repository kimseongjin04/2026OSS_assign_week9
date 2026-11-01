const API_URL = "https://6ae2c687bbb54129229a62b1.mockapi.io/books";
 
let books = [];
const form = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const genreInput = document.getElementById("genre");
const ratingInput = document.getElementById("rating");
const message = document.getElementById("message");
 
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

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "삭제";
        deleteBtn.addEventListener("click", () => handleDelete(book.id));

        li.appendChild(info);
        li.appendChild(deleteBtn);
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
 
async function deleteBook(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
 
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
 
    await loadBooks();
}

function validate() {
    if (titleInput.value.trim() === "" || authorInput.value.trim() === "") {
        return "제목과 저자는 공백 없이 입력해야 합니다.";
    }
 
    const year = Number(yearInput.value);
    if (year < 1900 || year > 2026) {
        return "출판연도는 1900~2026 사이여야 합니다.";
    }
 
    const rating = Number(ratingInput.value);
    if (rating < 1 || rating > 5) {
        return "평점은 1~5 사이여야 합니다.";
    }
 
    return "";
}

async function handleDelete(id) {
    if (!confirm("정말 삭제할까요?")) {
        return;
    }
 
    try {
        await deleteBook(id);
        message.textContent = "";
    } catch (error) {
        message.textContent = `삭제 실패: ${error.message}`;
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const errorText = validate();
    if (errorText !== "") {
        message.textContent = errorText;
        return;
    }
 
    const book = {
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        year: Number(yearInput.value),
        genre: genreInput.value,
        rating: Number(ratingInput.value)
    };
 
    try {
        await addBook(book);
        message.textContent = "";
        form.reset();
    } catch (error) {
        message.textContent = `요청 실패: ${error.message}`;
    }
});
 
loadBooks();