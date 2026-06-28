function submitContactForm() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const feedback = document.getElementById('formFeedback');

  // Validate fields
  if (!name || !email || !message) {
    feedback.innerHTML = `
      <div class="alert alert-danger">
        Please fill in all required fields (Name, Email, and Message).
      </div>`;
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.innerHTML = `
      <div class="alert alert-danger">
        Please enter a valid email address.
      </div>`;
    return;
  }

  // Success
  feedback.innerHTML = `
    <div class="alert alert-success">
      Thank you, ${name}! Your message has been sent. We'll get back to you shortly.
    </div>`;

  // Clear form
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactPhone').value = '';
  document.getElementById('contactMessage').value = '';
}

// ── Gallery Filter ──
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ── Booking Form Validation ──
function submitBooking() {
  const name = document.getElementById('bookName')?.value.trim();
  const phone = document.getElementById('bookPhone')?.value.trim();
  const email = document.getElementById('bookEmail')?.value.trim();
  const service = document.getElementById('bookService')?.value;
  const date = document.getElementById('bookDate')?.value;
  const time = document.getElementById('bookTime')?.value;
  const feedback = document.getElementById('bookingFeedback');

  if (!feedback) return;

  // Check required fields
  if (!name || !phone || !email || !service || !date || !time) {
    feedback.innerHTML = `
      <div class="alert alert-danger">
        Please fill in all required fields marked with *.
      </div>`;
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.innerHTML = `
      <div class="alert alert-danger">
        Please enter a valid email address.
      </div>`;
    return;
  }

  // Validate date is not in the past
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) {
    feedback.innerHTML = `
      <div class="alert alert-danger">
        Please select a future date for your appointment.
      </div>`;
    return;
  }

  // Success
  const serviceText = document.getElementById('bookService').options[
    document.getElementById('bookService').selectedIndex
  ].text;

  feedback.innerHTML = `
    <div class="alert alert-success">
      <strong>Booking Confirmed!</strong> Thank you, ${name}. 
      Your appointment for <em>${serviceText}</em> on ${date} at ${time} has been received. 
      We'll send a confirmation to ${email} shortly.
    </div>`;

  // Clear form
  ['bookName','bookPhone','bookEmail','bookService','bookBarber',
   'bookDate','bookTime','bookNotes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

// ── Navbar Scroll Effect ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    navbar.style.boxShadow = '0 2px 20px rgba(201, 168, 76, 0.15)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// ── Dark / Light Mode Toggle ──
const toggleBtn = document.getElementById('themeToggle');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    toggleBtn.innerHTML = isLight
      ? '<i class="bi bi-moon-fill"></i>'
      : '<i class="bi bi-sun-fill"></i>';
  });
}