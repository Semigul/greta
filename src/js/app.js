const catalog = [
  { id: 'n1', cat: 'Naglar', name: 'Polka Dot Nail Set', price: 82, desc: 'Prickigt, coolt och redo för lite extra glimmer.' },
  { id: 'n2', cat: 'Naglar', name: 'Mjuk Rosa-set', price: 149, desc: 'Mjuka toner med ett elegant och lekfullt uttryck.' },
  { id: 't1', cat: 'Kläder', name: 'Greta Logotyp-tshirt', price: 249, desc: 'En enkel grund i ett personligt uttryck.' },
  { id: 't2', cat: 'Kläder', name: 'Solsken-printad tröja', price: 229, desc: 'Varm och omfamnande med ett gladare mönster.' },
  { id: 'a1', cat: 'Smycken', name: 'Pärlarmband', price: 129, desc: 'Lätt, fint och perfekt till vardagen.' },
  { id: 'a2', cat: 'Smycken', name: 'Liten shopper', price: 299, desc: 'En praktisk detalj med ett stiligt utförande.' }
];

function formatPrice(value){
  return `${value} kr`;
}

function renderCategory(category, targetId){
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  const items = catalog.filter(item => item.cat === category);
  targetEl.innerHTML = items.map(item => `
    <article class="card">
      ${item.id === 'n1' ? '<img class="card-image" src="src/images/Polka_dot_nail_set.PNG" alt="Polka Dot Nail Set">' : '<div class="card-image-placeholder" aria-label="Placeholder-bild"></div>'}
      <div class="title">${item.name}</div>
      <div class="desc">${item.desc}</div>
      <div class="price-row"><strong>${formatPrice(item.price)}</strong><button class="btn" data-id="${item.id}">Se mer</button></div>
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

