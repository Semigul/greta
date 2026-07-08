const catalog = [
  { id: 'n1', cat: 'Naglar', name: 'Polka Dot', price: 82, desc: 'Prickigt, coolt och redo för lite extra glimmer.' },
  { id: 'n2', cat: 'Naglar', name: 'Summer Design', price: 82, desc: 'Somrigt, elegant och lekfullt uttryck.' },
  { id: 't1', cat: 'Kläder', name: 'Greta Logotyp-tshirt', price: 249, desc: 'En enkel grund i ett personligt uttryck.' },
  { id: 't2', cat: 'Kläder', name: 'Solsken-printad tröja', price: 229, desc: 'Varm och omfamnande med ett gladare mönster.' },
  { id: 'a1', cat: 'Smycken', name: 'Pärlarmband', price: 129, desc: 'Lätt, fint och perfekt till vardagen.' },
  { id: 'a2', cat: 'Smycken', name: 'Liten shopper', price: 299, desc: 'En praktisk detalj med ett stiligt utförande.' }
];

function formatPrice(value){
  return `${value} kr`;
}

const translations = {
  sv: {
    brand: 'By Greta',
    navHome: 'Hem',
    navNails: 'Naglar',
    navSummerDesign: 'Summer Design',
    brandEyebrow: 'By Greta',
    heroTitle: 'Designa dina egna naglar',
    heroLead: 'Jag är Greta och jag älskar att designa olika sorters som ger ett personligt uttryck.',
    heroCardTitle: 'En liten butik med stort hjärta',
    heroCardCopy: 'Varje detalj har ett personligt, lekfullt uttryck.',
    sectionNaglarTitle: 'Glitter, färg och känsla',
    sectionNaglarCopy: 'Korta, söta och glittriga nageldesign som gör varje dag lite extra fin.',
    sectionBrand: 'Summer Design',
    sectionTitle: 'Summer Design collage',
    sectionLead: 'Här visas alla Summer Design-bilder i ett lätt och luftigt collage. Perfekt för att visa produktidéer, moodboards och sommarens designval.',
    collageLabel: 'Collage',
    sectionGalleryTitle: 'Alla Summer Design-bilder',
    sectionCopy: 'Bilderna kommer från src/images och inkluderar alla filer som börjar med Summer_.',
    seeMore: 'Se mer'
  },
  en: {
    brand: 'By Greta',
    navHome: 'Home',
    navNails: 'Nails',
    navSummerDesign: 'Summer Design',
    brandEyebrow: 'By Greta',
    heroTitle: 'Design your own nails',
    heroLead: 'My name is Greta and I love creating looks that feel personal and playful.',
    heroCardTitle: 'A small shop with a big heart',
    heroCardCopy: 'Every detail carries a personal, joyful expression.',
    sectionNaglarTitle: 'Glitter, color and feeling',
    sectionNaglarCopy: 'Short, sweet and sparkly nail looks that make every day feel special.',
    sectionBrand: 'Summer Design',
    sectionTitle: 'Summer Design collage',
    sectionLead: 'Here are all Summer Design images in a light, airy collage. Perfect for showing product ideas, moodboards, and summer design choices.',
    collageLabel: 'Collage',
    sectionGalleryTitle: 'All Summer Design images',
    sectionCopy: 'Images come from src/images and include every file starting with Summer_.',
    seeMore: 'See more'
  }
};

let currentLanguage = localStorage.getItem('greta-lang') || 'sv';

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = translations[lang] && translations[lang][key];
    if (translation) {
      el.textContent = translation;
    }
  });
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = lang === 'sv' ? 'EN' : 'SV';
    langToggle.setAttribute('aria-label', lang === 'sv' ? 'Switch to English' : 'Byt till svenska');
  }
}

function toggleLanguage() {
  const nextLanguage = currentLanguage === 'sv' ? 'en' : 'sv';
  applyLanguage(nextLanguage);
  localStorage.setItem('greta-lang', nextLanguage);
}

function renderCategory(category, targetId){
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  const items = catalog.filter(item => item.cat === category);
  targetEl.innerHTML = items.map(item => `
    <article class="card">
      ${item.id === 'n1' ? '<img class="card-image" src="src/images/Polka_dot_nail_set.PNG" alt="Polka Dot Nail Set">' : item.id === 'n2' ? '<img class="card-image" src="src/images/Summer_ Blue Design .png" alt="Summer Design">' : '<div class="card-image-placeholder" aria-label="Placeholder-bild"></div>'}
      <div class="title">${item.name}</div>
      <div class="desc">${item.desc}</div>
      <div class="price-row"><strong>${formatPrice(item.price)}</strong>${item.id === 'n2' ? '<a class="btn" href="summer-design.html" data-i18n="seeMore">Se mer</a>' : `<button class="btn" data-id="${item.id}" data-i18n="seeMore">Se mer</button>`}</div>
    </article>
  `).join('');
}

renderCategory('Naglar', 'naglar-grid');
renderCategory('Kläder', 'klader-grid');
renderCategory('Smycken', 'smycken-grid');

const topNav = document.querySelector('.top-nav');
function updateNavScroll() {
  topNav.classList.toggle('scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateNavScroll);
updateNavScroll();
applyLanguage(currentLanguage);
const langToggle = document.getElementById('lang-toggle');
if (langToggle) langToggle.addEventListener('click', toggleLanguage);

