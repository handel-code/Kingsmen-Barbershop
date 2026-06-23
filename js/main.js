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