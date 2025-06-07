document.addEventListener('DOMContentLoaded', function() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    if (!testimonialContainer) return;
    
    const testimonials = [
        {
            name: "Andi Wijaya",
            comment: "Buku yang saya beli sampai dengan cepat dan kondisi sangat baik!",
            rating: 5
        },
        {
            name: "Budi Santoso",
            comment: "Pelayanan cepat dan buku asli. Akan belanja lagi di sini!",
            rating: 4
        },
        {
            name: "Citra Dewi",
            comment: "Koleksi bukunya lengkap, harga juga kompetitif.",
            rating: 5
        }
    ];
    
    let currentTestimonial = 0;
    let intervalId;
    
    function renderTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        testimonialContainer.innerHTML = `
            <div class="testimonial fade-in">
                <div class="rating">
                    ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p class="comment">"${testimonial.comment}"</p>
                <p class="name">- ${testimonial.name}</p>
            </div>
        `;
    }
    
    function startSlider() {
        intervalId = setInterval(() => {
            testimonialContainer.querySelector('.testimonial').classList.add('fade-out');
            setTimeout(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                renderTestimonial();
            }, 500);
        }, 5000);
    }
    
    // Navigasi manual
    document.getElementById('prev-testimonial')?.addEventListener('click', function() {
        clearInterval(intervalId);
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        renderTestimonial();
        startSlider();
    });
    
    document.getElementById('next-testimonial')?.addEventListener('click', function() {
        clearInterval(intervalId);
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonial();
        startSlider();
    });
    
    // Mulai slider
    renderTestimonial();
    startSlider();
});