window.addEventListener('load', () => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
      dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
      });
    }
  });
  