// Keep cards in HTML so links work even when JavaScript is disabled.
const search = document.querySelector('#search');
const clearSearch = document.querySelector('#clear-search');
const sections = [...document.querySelectorAll('.link-section')];
const cards = [...document.querySelectorAll('.card')];
const filters = [...document.querySelectorAll('[data-filter]')];
let activeFilter = 'all';

// Adding a card automatically updates the totals.
document.querySelector('#total').textContent = `${cards.length} useful links ↗`;
filters.forEach(button => {
  const count = button.dataset.filter === 'all' ? cards.length : document.getElementById(button.dataset.filter).querySelectorAll('.card').length;
  button.querySelector('span').textContent = count;
  button.hidden = count === 0;
});
function updateDirectory() {
  const query = search.value.trim().toLowerCase();
  clearSearch.hidden = search.value.length === 0;
  let visible = 0;
  sections.forEach(section => {
    let count = 0;
    section.querySelectorAll('.card').forEach(card => {
      // Search only the visible heading, never tags, keywords, or URLs.
      const text = card.querySelector('h4').textContent.toLowerCase();
      const matches = (activeFilter === 'all' || activeFilter === section.id) && text.includes(query);
      card.hidden = !matches;
      if (matches) count++;
    });
    section.hidden = count === 0;
    section.querySelector('.count').textContent = count;
    visible += count;
  });
  filters.forEach(button => {
    const selected = button.dataset.filter === activeFilter;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#results').textContent = !query && activeFilter === 'all' ? `Showing all ${cards.length} links` : `Showing ${visible} of ${cards.length} links`;
  document.querySelector('.empty').hidden = visible > 0;
}
search.addEventListener('input', updateDirectory);
clearSearch.addEventListener('click', () => {
  search.value = '';
  updateDirectory();
  search.focus();
});
filters.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  updateDirectory();
}));
document.querySelector('#reset').addEventListener('click', () => {
  search.value = '';
  activeFilter = 'all';
  updateDirectory();
  search.focus();
});
// The logo returns home and restores the full collection.
document.querySelector('header .brand').addEventListener('click', () => {
  search.value = '';
  activeFilter = 'all';
  updateDirectory();
});
updateDirectory();
