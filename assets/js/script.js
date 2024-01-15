// Title animation 
gsap.from(".title", { duration: 4, y: "-12%", ease: "elastic"});

// About image animation
gsap.from("#about-img", { duration: 4, x: "12%", ease: "elastic"});


// Get references to DOM elements
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

// Function to update the position of slides
function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Function to navigate to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
}

// Function to navigate to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

// Automatic slide change every 3 seconds
setInterval(nextSlide, 3000);