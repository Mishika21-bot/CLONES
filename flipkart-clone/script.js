let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Wrap around if at ends
    currentSlide = (n + slides.length) % slides.length;
    
    // Show current slide
    slides[currentSlide].classList.add('active');
}

// Manual controls
function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

// Auto-rotate every 5 seconds (optional)
setInterval(nextSlide, 5000);

// Initialize
showSlide(0);