import { AIRLINES } from './airlines.js';

let currentVariant = 'dark';
let currentRegion = 'All';
let currentSearch = '';
let darkMode = true;

const REGIONS = [
  'All',
  'North America',
  'Latin America',
  'Europe',
  'Middle East',
  'Africa',
  'Asia',
  'Oceania',
  'Other',
];

function logoUrl(code, variant) {
  return `https://www.gstatic.com/flights/airline_logos/70px/${variant === 'dark' ? 'dark/' : ''}${code}.png`;
}

function buildRegionBar() {
  const bar = document.getElementById('region-bar');
  bar.innerHTML = REGIONS.map(
    (r) =>
      `<button class="btn ${r === currentRegion ? 'active' : ''}" data-region="${r}" aria-pressed="${r === currentRegion}">${r}</button>`,
  ).join('');
  bar.querySelectorAll('[data-region]').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentRegion = btn.dataset.region;
      buildRegionBar();
      renderGrid();
    });
  });
}

function getFiltered() {
  return AIRLINES.filter((a) => {
    const matchRegion = currentRegion === 'All' || a.region === currentRegion;
    const q = currentSearch.toLowerCase();
    const matchSearch =
      !q ||
      a.code.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q);
    return matchRegion && matchSearch;
  });
}

function renderGrid() {
  const grid = document.getElementById('grid');
  const filtered = getFiltered();

  document.getElementById('stats').textContent =
    `Showing ${filtered.length} of ${AIRLINES.length} carriers`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results"><span aria-hidden="true">✈️</span>No airlines found for "${currentSearch}"</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (a, i) => `
    <div class="card" role="listitem" aria-label="${a.name}, IATA code ${a.code}${a.country ? ', ' + a.country : ''}" style="animation-delay:${Math.min(i * 20, 400)}ms">
      <div class="logo-wrap" aria-hidden="true">
        <img
          src="${logoUrl(a.code, currentVariant)}"
          alt=""
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
        >
        <span class="placeholder" style="display:none">${a.code}</span>
      </div>
      <div class="card-code">${a.code}</div>
      <div class="card-name">${a.name}</div>
      ${a.country ? `<div class="card-country">${a.country}</div>` : ''}
    </div>
  `,
    )
    .join('');
}

// Toggle page theme + logo variant together
document.getElementById('toggle-theme').addEventListener('click', function () {
  darkMode = !darkMode;
  currentVariant = darkMode ? 'dark' : 'light';
  document.body.classList.toggle('light-mode', !darkMode);
  this.textContent = darkMode ? '◐' : '◑';
  document.querySelectorAll('#grid .logo-wrap img').forEach((img) => {
    const code = img.closest('.card').querySelector('.card-code').textContent;
    img.src = logoUrl(code, currentVariant);
  });
});

// Search
const searchEl = document.getElementById('search');
const searchClear = document.getElementById('search-clear');

searchEl.addEventListener('input', function () {
  currentSearch = this.value;
  searchClear.style.display = this.value ? 'block' : 'none';
  currentRegion = 'All';
  buildRegionBar();
  renderGrid();
});

searchClear.addEventListener('click', function () {
  searchEl.value = '';
  currentSearch = '';
  this.style.display = 'none';
  searchEl.focus();
  currentRegion = 'All';
  buildRegionBar();
  renderGrid();
});

// Init
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('total-count').textContent = AIRLINES.length;
buildRegionBar();
renderGrid();
