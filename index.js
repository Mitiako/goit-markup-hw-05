console.log("JS connected!");

const modalOverlay = document.querySelector('.modal-overlay');
const heroButton = document.querySelector('.hero-button');
const closeBtn = document.querySelector('.close-btn');

heroButton.addEventListener('click', () => {
  modalOverlay.classList.toggle('is-open');
});

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('is-open');
});