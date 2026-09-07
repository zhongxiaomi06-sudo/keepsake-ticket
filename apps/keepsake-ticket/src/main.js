const input = document.querySelector('[data-photo-input]');
const photo = document.querySelector('[data-photo]');
const note = document.querySelector('[data-note]');
const soundButton = document.querySelector('[data-action="sound"]');
const soundLabel = document.querySelector('[data-sound-label]');

let activeUrl = null;
let muted = localStorage.getItem('keepsake-ticket.muted') === 'yes';

function renderSound() {
  soundButton.setAttribute('aria-pressed', String(muted));
  soundButton.setAttribute('aria-label', muted ? 'Turn on soundtrack' : 'Mute soundtrack');
  soundLabel.textContent = muted ? 'Sound off' : 'Sound on';
}

function replacePhoto(file) {
  if (activeUrl) URL.revokeObjectURL(activeUrl);
  activeUrl = URL.createObjectURL(file);
  photo.src = activeUrl;
  photo.alt = 'Your selected photograph';
  note.textContent = 'Your photo is local. Ticket artwork is a visual sample.';
}

input.addEventListener('change', () => {
  const file = input.files?.[0];
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    note.textContent = 'Choose a JPEG, PNG, or WebP image.';
    input.value = '';
    return;
  }
  replacePhoto(file);
});

soundButton.addEventListener('click', () => {
  muted = !muted;
  localStorage.setItem('keepsake-ticket.muted', muted ? 'yes' : 'no');
  renderSound();
});

window.addEventListener('pagehide', () => {
  if (activeUrl) URL.revokeObjectURL(activeUrl);
});

renderSound();
