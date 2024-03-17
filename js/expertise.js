document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Automatic slider
  setInterval(nextSlide, 5000); // Change slide every 5 seconds

  // Manual slider controls
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
});
  document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');

    burger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {

    var subClass = document.querySelector(".sub-class");


    subClass.parentElement.addEventListener("mouseenter", function() {
        subClass.classList.add("active");
    });

    
    subClass.parentElement.addEventListener("mouseleave", function() {
        subClass.classList.remove("active");
    });
});
  

/*maintaince*/
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving maintenance page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'maintenance.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
