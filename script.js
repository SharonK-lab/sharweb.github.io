// scripts.js

// DOM Elements for theme toggle buttons - may appear on multiple pages
const themeToggleBtns = [...document.querySelectorAll('#themeToggleBtn')];

// Store current theme in localStorage and apply it
function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-pressed', 'true');
      btn.textContent = 'Switch to Light Mode';
    });
  } else {
    document.body.classList.remove('dark-mode');
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-pressed', 'false');
      btn.textContent = 'Switch to Dark Mode';
    });
  }
  localStorage.setItem('theme', theme);
}

// Toggle theme between dark and light
function toggleTheme() {
  if (document.body.classList.contains('dark-mode')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

// Add event listeners to all theme toggle buttons
themeToggleBtns.forEach(btn => {
  btn.addEventListener('click', toggleTheme);
});

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  
  // Initialize theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  // Greeting function on Homepage
  const greetEl = document.getElementById('greeting');
  if (greetEl) {
    const now = new Date();
    const hour = now.getHours();
    let greetingText = 'Hello!';
    if (hour < 12) {
      greetingText = 'Good morning!';
    } else if (hour < 18) {
      greetingText = 'Good afternoon!';
    } else {
      greetingText = 'Good evening!';
    }
    greetEl.textContent = greetingText;
  }

  // Projects page - show/hide project details with keyboard accessibility
  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    const projectCards = projectsGrid.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('expanded');
        const details = card.querySelector('.project-details');
        const expanded = card.classList.contains('expanded');
        details.setAttribute('aria-hidden', !expanded);
      });
      // Keyboard accessibility: toggle with Enter or Space
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  // Contact Form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      let formValid = true;

      function showError(id, show) {
        const err = document.getElementById(id);
        if (err) err.style.display = show ? 'block' : 'none';
      }

      const nameInput = contactForm.name;
      const emailInput = contactForm.email;
      const phoneInput = contactForm.phone;
      const messageInput = contactForm.message;

      // Name required
      if (!nameInput.value.trim()) {
        showError('nameError', true);
        formValid = false;
      } else {
        showError('nameError', false);
      }

      // Email required and regex check
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        showError('emailError', true);
        formValid = false;
      } else {
        showError('emailError', false);
      }

      // Phone optional - if present, validate with regex
      const phoneVal = phoneInput.value.trim();
      if (phoneVal) {
        const phonePattern = /^\\+?[0-9\\s\\-]{7,15}$/;
        if (!phonePattern.test(phoneVal)) {
          showError('phoneError', true);
          formValid = false;
        } else {
          showError('phoneError', false);
        }
      } else {
        showError('phoneError', false);
      }

      // Message required
      if (!messageInput.value.trim()) {
        showError('messageError', true);
        formValid = false;
      } else {
        showError('messageError', false);
      }

      if (formValid) {
        // For demo: hide form and show success message
        contactForm.style.display = 'none';
        const successEl = document.getElementById('formSuccess');
        if (successEl) successEl.style.display = 'block';
      }
    });
  }

  // Survey form validation
  const surveyForm = document.getElementById('surveyForm');
  if (surveyForm) {
    surveyForm.addEventListener('submit', e => {
      e.preventDefault();

      let valid = true;

      function showError(id, show) {
        const el = document.getElementById(id);
        if (el) el.style.display = show ? 'block' : 'none';
      }

      // Validate radio group "referrer"
      const referrers = surveyForm.elements['referrer'];
      let selected = false;
      if (referrers) {
        if (referrers.length === undefined) {
          // Single radio button scenario (rare)
          if (referrers.checked) selected = true;
        } else {
          for (let i = 0; i < referrers.length; i++) {
            if (referrers[i].checked) {
              selected = true;
              break;
            }
          }
        }
      }

      if (!selected) {
        showError('referrerError', true);
        valid = false;
      } else {
        showError('referrerError', false);
      }

      if (valid) {
        surveyForm.reset();
        const success = document.getElementById('surveySuccess');
        if (success) success.style.display = 'block';
      }
    });
  }

});

