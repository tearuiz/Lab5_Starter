// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //DOM elements
  const synth = window.speechSynthesis;
  const faceImg = document.querySelector('img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  let voices = [];

  //helper function for generating voices
  function populateVoices() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  // audio for voice 
  speakButton.addEventListener('click', () => {
    const text = textArea.value.trim();
    if (!text || voiceSelect.value === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // update face image
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };


    synth.speak(utterance);
  });
}