const ticker = document.getElementById('ticker');
const btn = document.getElementById('pauseBtn');
let paused = false;
btn.addEventListener('click', () => {
  paused = !paused;
  ticker.classList.toggle('paused', paused);
  btn.textContent = paused ? 'Play' : 'Pause';
});