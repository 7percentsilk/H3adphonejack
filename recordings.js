document.querySelectorAll('.audio-player').forEach(player => {
    const audio = player.querySelector('audio');
    const playBtn = player.querySelector('.play-btn');
    const progress = player.querySelector('.progress');
  
    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
      } else {
        audio.pause();
        playBtn.textContent = '▶';
      }
    });
  
    audio.addEventListener('timeupdate', () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = percent + '%';
    });
  
    audio.addEventListener('ended', () => {
      playBtn.textContent = '▶';
      progress.style.width = '0%';
    });
  });
  