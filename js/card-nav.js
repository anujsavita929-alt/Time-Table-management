/* ===========================
   CARD NAVIGATION JAVASCRIPT
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
  const cardNav = document.querySelector('.card-nav');
  const hamburger = document.querySelector('.hamburger-menu');
  const ctaButton = document.querySelector('.card-nav-cta-button');

  if (!cardNav || !hamburger) {
    console.log('Card nav elements not found');
    return;
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    cardNav.classList.toggle('expanded');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (cardNav.classList.contains('expanded') && 
        !cardNav.contains(e.target)) {
      cardNav.classList.remove('expanded');
    }
  });

  // Prevent menu from closing when clicking inside
  cardNav.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Handle CTA button click
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      e.stopPropagation();
      navigateTo('role-selection.html');
    });
  }

  // Handle keyboard accessibility
  hamburger.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      cardNav.classList.toggle('expanded');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cardNav.classList.contains('expanded')) {
      cardNav.classList.remove('expanded');
    }
  });
});

console.log('Card-nav.js loaded successfully');