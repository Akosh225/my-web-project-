// ---------- Переключение темы ----------
const btn = document.getElementById('theme-btn');
const body = document.body;

function applyTheme(isLight) {
  body.classList.toggle('light', isLight);
  btn.textContent = isLight ? 'Красно-чёрная тема' : 'Светлая тема';
  try { localStorage.setItem('light', isLight ? '1' : '0'); } catch (e) {}
}

// По умолчанию — красно-чёрная тема
let saved = false;
try { saved = localStorage.getItem('light') === '1'; } catch (e) {}
applyTheme(saved);

btn.addEventListener('click', () => {
  applyTheme(!body.classList.contains('light'));
});

// ---------- Фильтр моделей ----------
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.grid .card');

filters.forEach(f => {
  f.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    f.classList.add('active');

    const category = f.dataset.filter;
    cards.forEach(card => {
      const show = category === 'all' || card.dataset.category === category;
      card.classList.toggle('hidden', !show);
    });
  });
});
