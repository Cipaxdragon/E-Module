const images = [];
for (let i = 25; i <= 53; i++) {
  images.push(`../assets/${i}.jpg`);
}
let currentImageIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateGalleryImage() {
  galleryImage.src = images[currentImageIndex];
}

prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateGalleryImage();
});

nextButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateGalleryImage();
});

updateGalleryImage();
