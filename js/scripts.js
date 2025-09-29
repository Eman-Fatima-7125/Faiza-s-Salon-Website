// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      alert(card.dataset.details || 'Service details coming soon!');
    });
  });
});
