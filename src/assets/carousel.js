function plusSlides(tag, desp) {
  var activeSlide = searchActiveSlide(tag);
  changeActiveSlide(tag, activeSlide, desp);
}

function changeActiveSlide(tag, slideNumber, desp) {

  slideNumber += desp;

  var slides = document.getElementsByClassName(tag);
  var dots = document.getElementsByClassName(tag.concat("-dot"));
  var size = slides.length;

  // Check slideNumber in total length
  if (slideNumber >= size) slideNumber = 0;
  else if (slideNumber < 0) slideNumber = size - 1;

  // Update slides
  for (i = 0; i < size; i++) {
    if (i == slideNumber) {
      slides[i].style.display = "block";
      // dots[i].style.backgroundColor = "#E60000"; // CAMBIAR BCKGR IMG - DIV?
    } else {
      slides[i].style.display = "none";
      // dots[i].style.backgroundColor = "#FFFFFF";
    }
  }
}

function searchActiveSlide(tag) {
  // Load all slides by tag
  var slides = document.getElementsByClassName(tag);

  // Looking for an active slide. It is active if the display property is equals to "block"
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display === "block") return i;
  }
  return 0;
}
