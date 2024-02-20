let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide-ig");
  const prevBtn = document.querySelector(".prev-ig");
  const nextBtn = document.querySelector(".next-ig");

  // Ensure slideIndex stays within bounds
  slideIndex = Math.min(Math.max(n, 1), slides.length);

  // Display slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display one slide at a time on mobile and tablet, three slides on desktop
  if (window.innerWidth >= 768) {
    for (i = slideIndex - 1; i < slideIndex + 2; i++) {
      if (slides[i]) {
        slides[i].style.display = "block";
      }
    }
  } else {
    slides[slideIndex - 1].style.display = "block";
  }

  // Disable/Enable navigation buttons
  if (slideIndex <= 1) {
    prevBtn.style.pointerEvents = "none";
    prevBtn.style.opacity = "0.5";
  } else {
    prevBtn.style.pointerEvents = "auto";
    prevBtn.style.opacity = "1";
  }

  if (slideIndex >= slides.length - 3) {
    nextBtn.style.pointerEvents = "none";
    nextBtn.style.opacity = "0.5";
  } else {
    nextBtn.style.pointerEvents = "auto";
    nextBtn.style.opacity = "1";
  }
}

