document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const genreFilter = document.getElementById('genre-filter');
    const bookGrid = document.querySelector('.book-grid');
    
    if (!bookGrid) return;
    
    // Dapatkan semua genre unik untuk dropdown filter
    const allGenres = [...new Set(booksDatabase.map(book => book.genre))];
    const genreSelect = document.createElement('select');
    genreSelect.innerHTML = `
        <option value="all">Semua Kategori</option>
        ${allGenres.map(genre => `<option value="${genre}">${genre}</option>`).join('')}
    `;
    genreFilter.replaceWith(genreSelect);
    
    // Render buku awal
    renderBooks(booksDatabase);
    
    // Fungsi render buku
    function renderBooks(books) {
        bookGrid.innerHTML = books.length > 0 ? '' : '<p class="no-results">Tidak ada buku yang ditemukan</p>';
        
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}" loading="lazy">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <div class="genre-badge">${book.genre}</div>
                    <p class="price">${book.price}</p>
                    <a href="book-detail.html?id=${book.id}" class="btn">Detail</a>
                </div>
            `;
            bookGrid.appendChild(bookCard);
        });
    }
    
    // Fungsi pencarian
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const selectedGenre = genreSelect.value;
        
        const filteredBooks = booksDatabase.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                               book.author.toLowerCase().includes(searchTerm);
            const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });
        
        renderBooks(filteredBooks);
    });
    
    // Fungsi filter genre
    genreSelect.addEventListener('change', function() {
        const selectedGenre = this.value;
        const searchTerm = searchInput.value.toLowerCase();
        
        const filteredBooks = booksDatabase.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                               book.author.toLowerCase().includes(searchTerm);
            const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });
        
        renderBooks(filteredBooks);
    });
});