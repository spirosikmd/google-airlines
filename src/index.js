import { AIRLINES, LAST_UPDATED } from './airlines.js';

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
  const q = currentSearch.toLowerCase();
  const searchFiltered = AIRLINES.filter(
    (a) => !q || a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q),
  );
  const counts = { All: searchFiltered.length };
  searchFiltered.forEach((a) => {
    counts[a.region] = (counts[a.region] || 0) + 1;
  });
  bar.innerHTML = REGIONS.map(
    (r) =>
      `<button class="btn ${r === currentRegion ? 'active' : ''}" data-region="${r}" aria-pressed="${r === currentRegion}">${r} · ${counts[r] ?? 0}</button>`,
  ).join('');
  bar.querySelectorAll('[data-region]').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentRegion = btn.dataset.region;
      syncUrl();
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

function syncUrl() {
  const params = new URLSearchParams();
  if (currentSearch) params.set('q', currentSearch);
  if (currentRegion !== 'All') params.set('region', currentRegion);
  const query = params.toString();
  history.replaceState(null, '', query ? `?${query}` : location.pathname);
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

// Press / to focus search
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchEl) {
    e.preventDefault();
    searchEl.focus();
  }
});

searchEl.addEventListener('input', function () {
  currentSearch = this.value;
  searchClear.style.display = this.value ? 'block' : 'none';
  currentRegion = 'All';
  syncUrl();
  buildRegionBar();
  renderGrid();
});

searchClear.addEventListener('click', function () {
  searchEl.value = '';
  currentSearch = '';
  this.style.display = 'none';
  searchEl.focus();
  currentRegion = 'All';
  syncUrl();
  buildRegionBar();
  renderGrid();
});

// Init — restore state from URL params
const params = new URLSearchParams(location.search);
const qParam = params.get('q') || '';
const regionParam = params.get('region') || 'All';
if (qParam) {
  currentSearch = qParam;
  searchEl.value = qParam;
  searchClear.style.display = 'block';
}
if (REGIONS.includes(regionParam)) {
  currentRegion = regionParam;
}
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-updated').textContent = LAST_UPDATED;
document.getElementById('total-count').textContent = AIRLINES.length;
buildRegionBar();
renderGrid();
