// src/js/animation.js

// Function to update the image based on the note
function animateFingers(note) {
  const spongebobImage = document.getElementById('spongebobImage');
  if (!spongebobImage) {
    console.error('SpongeBob image not found');
    return;
  }

  const noteToImage = {
    '1': 'images/2.png',
    '2': 'images/3.png',
    '3': 'images/4.png',
    '4': 'images/5.png',
    '5': 'images/6.png',
    '6': 'images/7.png',
    '7': 'images/8.png',
    '8': 'images/3.png'
  };

  const imagePath = noteToImage[note];

  if (!imagePath) {
    console.error(`No image found for note "${note}"`);
    return;
  }

  spongebobImage.src = imagePath;
}

// Function to return image back to default
function defaultFingers() {
  const spongebobImage = document.getElementById('spongebobImage');
  if (!spongebobImage) {
    console.error('Spongebob image not found');
    return;
  }

  spongebobImage.src = 'images/1.png'
}
