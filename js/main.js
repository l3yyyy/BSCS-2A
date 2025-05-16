 function animateProgress(barId, textId, targetPercent) {
  const fill = document.getElementById(barId).querySelector('.progress-fill');
  const text = document.getElementById(textId);
  let current = 0;

  const interval = setInterval(() => {
    if (current > targetPercent) {
      clearInterval(interval);
      return;
    }
    const angle = (current / 100) * 360;
    fill.style.background = `conic-gradient(#403D39 ${angle}deg, #CCC5B9 ${angle}deg)`;
    text.textContent = `${current}%`;
    current++;
  }, 20); // speed
}

function startAllProgress() {
  animateProgress('progressBarHTML', 'progressTextHTML', 70);
  animateProgress('progressBarCSS', 'progressTextCSS', 60);
  animateProgress('progressBarJAVA', 'progressTextJAVA', 75);
};