document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validasi
        if (!name || !email || !message) {
            showAlert('error', 'Harap isi semua field!');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showAlert('error', 'Email tidak valid!');
            return;
        }
        
        // Simpan ke localStorage (simulasi)
        const contacts = JSON.parse(localStorage.getItem('contacts') || []);
        contacts.push({ name, email, message, date: new Date().toISOString() });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        
        showAlert('success', 'Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
        this.reset();
    });
    
    function showAlert(type, message) {
        const alertBox = document.createElement('div');
        alertBox.className = `alert ${type}`;
        alertBox.textContent = message;
        
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) existingAlert.remove();
        
        contactForm.prepend(alertBox);
        
        setTimeout(() => {
            alertBox.classList.add('fade-out');
            setTimeout(() => alertBox.remove(), 500);
        }, 3000);
    }
});