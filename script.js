document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0; 
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const visibleSlides = 3;
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slideWidth = sliderWrapper.offsetWidth / visibleSlides; 

    function moveSlider() {
        // Обмеження, щоб запобігти "порожньому" простору в кінці
        if (currentIndex > totalSlides - visibleSlides) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - visibleSlides; 
        }
        let transformValue = -(slideWidth * currentIndex);
        sliderWrapper.style.transform = `translateX(${transformValue}px)`;
    }

    document.querySelector('.next').addEventListener('click', function() {
        if (currentIndex < totalSlides - visibleSlides) { 
            currentIndex++;
        }
        moveSlider();
    });
    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex--;
        moveSlider();
    });
    moveSlider(); 
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollToBallBtn = document.querySelector('.btn-feature');
    function scrollToBalls() {
        const ballSection = document.querySelector('.orange-section'); 
        ballSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }

    scrollToBallBtn.addEventListener('click', scrollToBalls);
});