document.addEventListener("DOMContentLoaded", function() {
window.addEventListener('load', () => {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    dropdown.addEventListener('touchstart', () => {
      dropdown.classList.toggle('active');
    });
    dropdown.addEventListener('touchend', () => {
      dropdown.classList.toggle('active');
    });
  }
})
});