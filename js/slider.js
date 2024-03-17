
//foundational slider 
document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev-slide');
  const nextButton = document.querySelector('.next-slide');
  const slides = document.querySelectorAll('.slide-content');
  const getStartedBtn = document.querySelector('.expertise-btn');
  let currentIndex = 0;


  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }


  showSlide(currentIndex);


  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  
  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });


  getStartedBtn.addEventListener('click', function() {

  });
});