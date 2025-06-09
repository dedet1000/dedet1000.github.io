// carousel.js
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Data buku (ambil dari booksDatabase atau array khusus)
    // Ambil 5 buku terlaris dari database
    const carouselBooks = getBestsellers().slice(0, 5);
    

    // Duplikasi item untuk efek infinite
    
    // Render carousel items
    carousel.innerHTML = carouselBooks.map(book => `
        <div class="carousel-item">
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}" loading="lazy">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <p class="price">${book.price}</p>
                    <a href="book-detail.html?id=${book.id}" class="btn">Detail</a>
                </div>
            </div>
        </div>
    `).join('');

    // Manual Navigation
    let scrollAmount = 0;
    const itemWidth = 250; // Sesuaikan dengan lepat item
    
    nextBtn.addEventListener('click', () => {
        carousel.scrollTo({
            left: (scrollAmount += itemWidth),
            behavior: 'smooth'
        });
        if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
            carousel.scrollTo({ left: 0, behavior: 'auto' });
        }
    });
    
    prevBtn.addEventListener('click', () => {
        carousel.scrollTo({
            left: (scrollAmount -= itemWidth),
            behavior: 'smooth'
        });
        if (scrollAmount < 0) {
            scrollAmount = carousel.scrollWidth / 2;
            carousel.scrollTo({ left: scrollAmount, behavior: 'auto' });
        }
    });

    // Auto-scroll (opsional)
    let autoScroll = setInterval(() => {
        carousel.scrollTo({
            left: (scrollAmount += itemWidth),
            behavior: 'smooth'
        });
        if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
            carousel.scrollTo({ left: 0, behavior: 'auto' });
        }
    }, 3000);

    // Pause on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
    carousel.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            carousel.scrollTo({
                left: (scrollAmount += itemWidth),
                behavior: 'smooth'
            });
            if (scrollAmount >= carousel.scrollWidth / 2) {
                scrollAmount = 0;
                carousel.scrollTo({ left: 0, behavior: 'auto' });
            }
        }, 3000);
    });
});