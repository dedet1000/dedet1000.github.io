document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    
    // Gunakan fungsi dari books-database.js
    const bookData = getBookById(bookId);
    
    if (!bookData) {
        document.getElementById('book-title').textContent = "Buku tidak ditemukan";
        return;
    }

    // Isi data buku
    document.getElementById('book-title').textContent = bookData.title;
    document.getElementById('book-author').textContent = `Oleh: ${bookData.author}`;
    document.getElementById('book-price').textContent = bookData.price;
    document.getElementById('book-genre').textContent = bookData.genre;
    document.getElementById('book-description').textContent = bookData.description;
    document.getElementById('detail-book-image').src = bookData.image;
    document.getElementById('detail-book-image').alt = bookData.title;
    
    // Rating
    const ratingElement = document.createElement('div');
    ratingElement.className = 'rating';
    ratingElement.innerHTML = `${'★'.repeat(Math.round(bookData.rating))}${'☆'.repeat(5 - Math.round(bookData.rating))} (${bookData.rating}/5)`;
    document.querySelector('.book-info').appendChild(ratingElement);
    
    // Tombol Beli
    document.getElementById('buy-button').addEventListener('click', function() {
        alert(`Terima kasih! Anda akan membeli ${bookData.title}. (Simulasi)`);
    });
    
    // Buku terkait (ambil dari genre yang sama)
    const relatedBooks = booksDatabase
        .filter(book => book.genre === bookData.genre && book.id !== bookData.id)
        .slice(0, 3);
    
    const relatedContainer = document.getElementById('related-books');
    if (relatedBooks.length > 0) {
        relatedBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book-card';
            bookElement.innerHTML = `
                <a href="book-detail.html?id=${book.id}">
                    <img src="${book.image}" alt="${book.title}">
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                        <p class="price">${book.price}</p>
                    </div>
                </a>
            `;
            relatedContainer.appendChild(bookElement);
        });
    } else {
        relatedContainer.innerHTML = '<p>Tidak ada buku terkait</p>';
    }
});