// src/js/audio.js

// Initialize Web Audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Load flute samples
const NOTE_SAMPLES = {
  '1': 'sounds/flute_notes/1.wav',
  '2': 'sounds/flute_notes/2.wav',
  '3': 'sounds/flute_notes/3.wav',
  '4': 'sounds/flute_notes/4.wav',
  '5': 'sounds/flute_notes/5.wav',
  '6': 'sounds/flute_notes/6.wav',
  '7': 'sounds/flute_notes/7.wav',
  '8': 'sounds/flute_notes/8.wav'
};

const fluteNotes = {};

async function loadSamples() {
  for (const [note, filePath] of Object.entries(NOTE_SAMPLES)) {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    fluteNotes[note] = audioBuffer;
  }
}

loadSamples();

// Function to play a specific note
function playNote(note) {
  if (!fluteNotes[note]) {
    console.error(`Note "${note}" not loaded`);
    return;
  }

  const source = audioContext.createBufferSource();
  source.buffer = fluteNotes[note];
  source.connect(audioContext.destination);
  source.start();
}

// Add event listeners for keyboard input
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'a':
      playNote('1');
      animateFingers('1');
      break;
    case 's':
      playNote('2');
      animateFingers('2');
      break;
    case 'd':
      playNote('3');
      animateFingers('3');
      break;
    case 'f':
      playNote('4');
      animateFingers('4');
      break;
    case 'g':
      playNote('5');
      animateFingers('5');
      break;
    case 'h':
      playNote('6');
      animateFingers('6');
      break;
    case 'j':
      playNote('7');
      animateFingers('7');
      break;
    case 'k':
      playNote('8');
      animateFingers('8');
      break;

    default:
      break;
  }
});

window.addEventListener('keyup', (event) => {
  defaultFingers()
});

function enableAudio() {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

//Add a click listener to the start button
const startButton = document.getElementById('startButton');
if (startButton) {
  startButton.addEventListener('click', enableAudio);
}