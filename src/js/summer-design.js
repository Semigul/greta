const summerGallery = document.getElementById('summer-gallery');
const summerImages = [
  'src/images/Summer_ Blue Design .png',
  'src/images/Summer_FishPNG.PNG',
  'src/images/Summer_Floralfrench.png',
  'src/images/Summer_flowers.png',
  'src/images/Summer_pink1.png'
];

function renderSummerGallery() {
  summerGallery.innerHTML = summerImages.map(src => `
    <div class="gallery-item">
      <img src="${src}" alt="Summer Design bild">
    </div>
  `).join('');
}

renderSummerGallery();
