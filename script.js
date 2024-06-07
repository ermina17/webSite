const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

// slider next button

nextBtn.onclick = () => {
    slideNumber++;
    if(slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
} 