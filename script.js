const audio = document.getElementById('bgm');
const slider = document.getElementById('slider');
const intro = document.getElementById('intro');
const musicBtn = document.getElementById('musicBtn');
const dotsEl = document.getElementById('dots');
const slides = [...document.querySelectorAll('.slide')];
let playing = false;

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dotsEl.appendChild(dot);
});

const dots = [...document.querySelectorAll('.dot')];

function updateDots() {
  const width = slider.clientWidth || 1;
  const index = Math.max(0, Math.min(slides.length - 1, Math.round(slider.scrollLeft / width)));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

async function playMusic() {
  try {
    audio.volume = 0.7;
    await audio.play();
    playing = true;
    musicBtn.textContent = '♫';
  } catch (e) {
    playing = false;
    musicBtn.textContent = '♪';
    console.log('浏览器阻止了自动播放，请点击页面或音乐按钮开始播放。');
  }
}

function pauseMusic() {
  audio.pause();
  playing = false;
  musicBtn.textContent = '♪';
}

intro.addEventListener('click', async () => {
  intro.classList.add('hidden');
  await playMusic();
});

musicBtn.addEventListener('click', async (event) => {
  event.stopPropagation();
  if (playing) pauseMusic();
  else await playMusic();
});

slider.addEventListener('scroll', updateDots, { passive: true });
window.addEventListener('resize', updateDots);

// 桌面浏览器若允许则自动播放；手机浏览器通常需要第一次点击。
playMusic();
