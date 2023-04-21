document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
      dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
      });
    }
  });
  