document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;
    
    const inner = document.createElement('div');
    inner.className = 'carousel-inner';
    carousel.appendChild(inner);
    
    // Ambil 5 buku terlaris dari database
    const carouselBooks = getBestsellers().slice(0, 5);
    
    // Buat item carousel
    carouselBooks.forEach(book => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <div class="book-card">
                <a href="book-detail.html?id=${book.id}">
                    <img src="${book.image}" alt="${book.title}">
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                        <p class="price">${book.price}</p>
                    </div>
                </a>
            </div>
        `;
        inner.appendChild(item);
    });
    
    // Fungsi carousel otomatis
    let currentIndex = 0;
    const itemCount = carouselBooks.length;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % itemCount;
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    if (itemCount > 1) {
        setInterval(nextSlide, 3000);
    }
});