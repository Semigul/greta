const catalog = [
  { id: 'n1', cat: 'Naglar', name: 'Glitter Pop-set', price: 199 },
  { id: 'n2', cat: 'Naglar', name: 'Mjuk Rosa-set', price: 149 },
  { id: 't1', cat: 'T-shirts', name: 'Greta Logotyp-tshirt', price: 249 },
  { id: 't2', cat: 'T-shirts', name: 'Solsken-printad tröja', price: 229 },
  { id: 'a1', cat: 'Accessoarer', name: 'Pärlarmband', price: 129 },
  { id: 'a2', cat: 'Accessoarer', name: 'Liten shopper', price: 299 }
];

const catalogEl = document.getElementById('catalog-grid');
const recList = document.getElementById('rec-list');
const recommendation = document.getElementById('recommendation');
const resetBtn = document.getElementById('reset');

function formatPrice(value){
  return `${value} kr`;
}

function renderCatalog(items = catalog){
  catalogEl.innerHTML = items.map(p => `
    <article class="card">
      ${p.name === 'Glitter Pop-set' ? '<img class="card-image" src="src/images/glitter-pop-set.svg" alt="Glitter Pop-set">' : ''}
      <div class="title">${p.name}</div>
      <div class="desc">Kategori: ${p.cat}</div>
      <div class="price-row"><strong>${formatPrice(p.price)}</strong><button class="btn" data-id="${p.id}">Se mer</button></div>
    </article>
  `).join('');
}

renderCatalog();

// Assistant flow
const steps = Array.from(document.querySelectorAll('.step'));
const flowSteps = Array.from(document.querySelectorAll('.flow-step'));
const opts = Array.from(document.querySelectorAll('.opt'));
let answers = { category: '', vibe: '', budget: '' };
let current = 0;

function renderStep(i){
  flowSteps.forEach(s => s.classList.toggle('active', Number(s.dataset.step) === i));
  steps.forEach((pill, idx) => pill.classList.toggle('active', idx === i));
}

steps.forEach(s => s.addEventListener('click', ()=>{current = Number(s.dataset.step); renderStep(current)}));

opts.forEach(o => o.addEventListener('click', ()=>{
  const key = o.dataset.key; const val = o.dataset.value;
  answers[key] = val;
  const parent = o.closest('.flow-step');
  parent.querySelectorAll('.opt').forEach(x => x.classList.toggle('active', x===o));
  if (Number(parent.dataset.step) < 2) { current = Number(parent.dataset.step) + 1; renderStep(current); }
  else { showRecommendation(); }
}));

function showRecommendation(){
  recommendation.hidden = false;
  const list = catalog.filter(p => p.cat === (answers.category || 'Naglar'));
  recList.innerHTML = list.map(p => `
    <div class="rec-card">
      <strong>${p.name}</strong>
      <div>${formatPrice(p.price)}</div>
      <div class="price-row"><button class="btn" data-id="${p.id}">Mer info</button></div>
    </div>
  `).join('');
}

resetBtn.addEventListener('click', ()=>{
  answers = { category: '', vibe: '', budget: '' };
  recommendation.hidden = true;
  document.querySelectorAll('.opt').forEach(x => x.classList.remove('active'));
  current = 0; renderStep(0);
});

