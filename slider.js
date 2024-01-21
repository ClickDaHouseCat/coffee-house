
  // Slider Favorite-coffee
  let touchStartX = 0;
  let touchEndX = 0;
  let currentSlide = 0;
  let autoScrollInterval;

  function showSlide(index) {
      const sliderCoffee = document.querySelector('.slider-coffee');
      const offset = -index * 100;
      sliderCoffee.style.transform = `translateX(${offset}%)`;

      const paginationDots = document.querySelectorAll('.pagination div');
      paginationDots.forEach((dot, i) => {
          if (i === index) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % 3;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + 3) % 3;
      showSlide(currentSlide);
  }

  function goToSlide(index) {
      currentSlide = index;
      showSlide(currentSlide);
  }

  function startAutoScroll() {
      autoScrollInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoScroll() {
      clearInterval(autoScrollInterval);
  }

  const sliderCoffee = document.querySelector('.slider-coffee');

sliderCoffee.addEventListener('touchstart', handleTouchStart, false);
sliderCoffee.addEventListener('touchmove', handleTouchMove, false);
sliderCoffee.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    const swipeThreshold = 50;
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > swipeThreshold) {
        if (deltaX > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    }
}

  showSlide(currentSlide);
  startAutoScroll();