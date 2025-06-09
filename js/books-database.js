// books-database.js
const booksDatabase = [
    {
        id: 1,
        title: "Laut Bercerita",
        author: "Leila S. Chudori",
        genre: "Fiksi Historis",
        price: "Rp 89.000",
        description: "Novel tentang perjuangan aktivis 1998 yang menghilang. Laut menjadi saksi bisu tragedi masa lalu yang perlahan terungkap.",
        rating: 4.5,
        image: "../media/laut-bercerita.jpg",
        pages: 379,
        publisher: "Kepustakaan Populer Gramedia",
        year: 2021,
        isBestseller: true
    },
    {
        id: 2,
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Toer",
        genre: "Fiksi Historis",
        price: "Rp 75.000",
        description: "Kisah Minke, pemuda Jawa yang memperjuangkan pendidikan dan melawan kolonialisme di awal abad ke-20.",
        rating: 4.8,
        image: "../media/Bumi Manusia.jpg",
        pages: 535,
        publisher: "Lentera Dipantara",
        year: 1980,
        isBestseller: true
    },
    {
        id: 3,
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        genre: "Filosofi",
        price: "Rp 99.000",
        description: "Pengenalan praktis filsafat Stoikisme untuk mengatasi emosi dan masalah kehidupan modern.",
        rating: 4.6,
        image: "../media/Filosofi Teras.jpg",
        pages: 320,
        publisher: "Kompas",
        year: 2018,
        isBestseller: true
    },
    {
        id: 4,
        title: "Negeri van Oranje",
        author: "Annisa Nisfihani",
        genre: "Komik",
        price: "Rp 65.000",
        description: "Kumpulan komik humor berdasarkan pengalaman nyata mahasiswa Indonesia di Belanda.",
        rating: 4.2,
        image: "../media/Negeri van Oranje.jpg",
        pages: 208,
        publisher: "Gagas Media",
        year: 2017,
        isBestseller: true
    },
    {
        id: 5,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Pengembangan Diri",
        price: "Rp 120.000",
        description: "Cara membangun kebiasaan kecil yang berdampak besar pada produktivitas dan hidup Anda.",
        rating: 4.9,
        image: "../media/Atomic Habits.jpg",
        pages: 320,
        publisher: "Penguin Random House",
        year: 2018,
        isBestseller: true
    },
    {
        id: 6,
        title: "One Piece Vol. 1",
        author: "Eiichiro Oda",
        genre: "Manga",
        price: "Rp 55.000",
        description: "Awal petualangan Luffy dan kru Bajak Laut Topi Jerami mencari harta karun legendaris.",
        rating: 4.7,
        image: "../media/One Piece Vol. 1.jpg",
        pages: 216,
        publisher: "Shueisha",
        year: 1997,
        isBestseller: false
    },
    {
        id: 7,
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        genre: "Fiksi Pendidikan",
        price: "Rp 70.000",
        description: "Kisah inspiratif anak-anak SD Muhammadiyah di Belitung yang penuh semangat belajar.",
        rating: 4.8,
        image: "../media/Laskar Pelangi.jpg",
        pages: 529,
        publisher: "Bentang Pustaka",
        year: 2005,
        isBestseller: true
    },
    {
        id: 8,
        title: "Dilan 1990",
        author: "Pidi Baiq",
        genre: "Fiksi Romantis",
        price: "Rp 85.000",
        description: "Kisah cinta masa SMA antara Dilan dan Milea di Bandung tahun 1990-an.",
        rating: 4.3,
        image: "../media/Dilan 1990.jpg",
        pages: 332,
        publisher: "Pastel Books",
        year: 2014,
        isBestseller: true
    }
];

// Fungsi untuk mendapatkan buku berdasarkan ID
function getBookById(id) {
    return booksDatabase.find(book => book.id === id);
}

// Fungsi untuk mendapatkan buku berdasarkan genre
function getBooksByGenre(genre) {
    return booksDatabase.filter(book => book.genre === genre);
}

// Fungsi untuk mendapatkan buku terlaris
function getBestsellers() {
    return booksDatabase.filter(book => book.isBestseller);
}

// Export data jika menggunakan modul ES6
// export { booksDatabase, getBookById, getBooksByGenre, getBestsellers };