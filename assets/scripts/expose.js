// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // DOM elements
  const hornSelect = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");           // from <input id="volume">
  const volumeIcon = document.querySelector("#volume-controls img"); // the image inside the div
  const soundImage = document.querySelector("#expose img");         // first img in the section
  const audioElement = document.querySelector("audio");             // the only <audio> element
  const playButton = document.querySelector("button");              // the only <button>

  
  // initialize JSConfetti
  const jsConfetti = new JSConfetti();

  // horn selection 
  hornSelect.addEventListener('change', () => {
      const selectedHorn = hornSelect.value;
      
      // update images and audios
      switch(selectedHorn) {
          case 'air-horn':
              soundImage.src = 'assets/images/air-horn.svg';
              audioElement.src = 'assets/audio/air-horn.mp3';
              break;
          case 'car-horn':
              soundImage.src = 'assets/images/car-horn.svg';
              audioElement.src = 'assets/audio/car-horn.mp3';
              break;
          case 'party-horn':
              soundImage.src = 'assets/images/party-horn.svg';
              audioElement.src = 'assets/audio/party-horn.mp3';
              break;
          default:
              soundImage.src = 'assets/images/no-image.png';
              audioElement.src = '';
      }
  });

  // volume slider 
  volumeSlider.addEventListener('input', () => {
      const volume = volumeSlider.value;
      
      const audioVolume = volume / 100;
      audioElement.volume = audioVolume;
      
      // update volume level
      if (volume == 0) {
          volumeIcon.src = 'assets/icons/volume-level-0.svg';
      } else if (volume < 33) {
          volumeIcon.src = 'assets/icons/volume-level-1.svg';
      } else if (volume < 67) {
          volumeIcon.src = 'assets/icons/volume-level-2.svg';
      } else {
          volumeIcon.src = 'assets/icons/volume-level-3.svg';
      }
  });

  // play button
  playButton.addEventListener('click', () => {
      audioElement.play();
      
      // party horn confetti case
      if (hornSelect.value === 'party-horn' && jsConfetti) {
          jsConfetti.addConfetti();
      }
  });
 
}