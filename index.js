const soundButtons = document.querySelectorAll('.sound-button');


// Function to play the sound
function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}

// Add event listeners to the sound buttons
soundButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');
    playSound(soundFile);
  });
});