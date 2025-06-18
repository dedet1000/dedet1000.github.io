# BUKUIN
BUKUIN adalah toko buku online modern yang menghadirkan beragam pilihan buku berkualitas langsung ke genggaman Anda. Dengan desain platform yang minimalis dan elegan, BUKUIN memudahkan siapa saja untuk menemukan, membeli, dan menikmati buku favorit kapan saja, di mana saja. Temukan inspirasi membaca tanpa batas bersama BUKUIN.

## FITUR-FITUR YANG ADA DI BUKUIN
- BERANDA
- KATEGORI BUKU
- DESKRIPSI BUKU
- TESTIMONI BUKU
- KONTAK

## SOFTWARE YANG DIGUNAKAN
Website ini dibangun menggunakan 
- Visual Studio Code digunakan untuk mengedit dan menambahkan kode untuk program 
- GitHub digunakan untuk menyinpan file-file untuk program
- Chrome digunakan untuk mencari data-data yang dibutuhkan untuk membuat program
- Git digunakan untuk menghubungkan antara GitHub dengan Visual Studio Code

## SPESIFIKASI YANG DIPERLUKAN
- Visual Studio Code 1.101.0 or later
- GitHub 3.15.2 or later
- Chrome 137.0.7151.104 or later
- Git 2.50.0

## STRUKTUR
website BUKUIN

project-root/
├── index.html
├── categories.html
├── book-detail.html
├── testimonials.html
├── contact.html
│
├── js/
│   ├── books-database.js       # Database utama (list buku)
│   ├── carousel.js             # Carousel/banner dengan infinite scroll
│   ├── search-filter.js        # Pencarian & filter buku
│   ├── book-detail.js          # Menampilkan detail buku secara dinamis
│   ├── testimonial.js          # Slider/testimoni pengguna
│   ├── form-validation.js      # Validasi form (kontak, dsb)
│   └── script.js               # Fungsi utilitas umum
│
├── css/
│   ├── styles.css              # Gaya utama untuk semua halaman
│   ├── responsive.css          # Media query & layout responsif
│   └── animations.css          # Animasi tambahan (hover, fade, dsb)
│
└── media/                      # Kumpulan aset gambar (cover, ikon, dll)
    ├── 30%.png
    ├── Atomic Habits.jpg
    ├── Bumi Manusia.jpg
    ├── Dilan 1990.jpg
    ├── Filosofi Teras.jpg
    ├── Kualitas Terjamin.png
    ├── Laskar Pelangi.jpg
    ├── Negeri van Oranje.jpg
    ├── One Piece Vol. 1.jpg
    ├── laut-bercerita.jpg
    └── loga.jpg
