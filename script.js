const slideshow = document.querySelector('.slideshow');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const imageIndexSpan = document.getElementById('imageIndex');
const totalImagesSpan = document.getElementById('totalImages');

let currentImageIndex = 0;
const totalImages = slideshow.children.length;

function showImage(index) {
  slideshow.style.display = 'block';
  for (let i = 0; i < totalImages; i++) {
    slideshow.children[i].style.display = 'none';
  }
  slideshow.children[index].style.display = 'block';
  imageIndexSpan.textContent = index + 1;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

totalImagesSpan.textContent = totalImages;
showImage(currentImageIndex);