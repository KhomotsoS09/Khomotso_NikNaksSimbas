// Nik Naks Simbas - WEDE5020 Part 3 JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // === ACCORDION FOR FAQ/INFO ===
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      this.classList.toggle('active');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // === LIGHTBOX GALLERY ===
  const galleryImages = document.querySelectorAll('.gallery img');
  if (galleryImages.length > 0) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightbox.innerHTML = `<img src="${this.src}" alt="${this.alt}"><span class="close">&times;</span>`;
      });
    });

    lightbox.addEventListener('click', function(e) {
      if (e.target !== this.querySelector('img')) {
        this.style.display = 'none';
      }
    });
  }

  // === DYNAMIC PRODUCT LIST + SEARCH ===
  const products = [
    { name: 'Simba Nik Naks Sweet Chilli', price: 'R12.99', category: 'Sweet Chilli' },
    { name: 'Simba Nik Naks BBQ', price: 'R12.99', category: 'BBQ' },
    { name: 'Simba Nik Naks Cheesy Kota', price: 'R13.99', category: 'Cheesy Kota' },
    { name: 'Simba Nik Naks Chutney', price: 'R12.99', category: 'Chutney' },
    { name: 'Simba Nik Naks Flamin Hot Chilli', price: 'R13.99', category: 'Flamin Hot' },
    { name: 'Simba Nik Naks Chillies & Cheese', price: 'R13.99', category: 'Chillies & Cheese' },
    { name: 'Simba Nik Naks Family Pack - Mixed', price: 'R59.99', category: 'Family' }
  ];

  const productContainer = document.getElementById('product-list');
  const searchInput = document.getElementById('product-search');

  function displayProducts(filteredProducts) {
    if (!productContainer) return;
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
      productContainer.innerHTML += `
        <div class="product-card">
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p><strong>${product.price}</strong></p>
        </div>
      `;
    });
  }

  if (searchInput && productContainer) {
    displayProducts(products);
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
      );
      displayProducts(filtered);
    });
  }

  // === CONTACT FORM VALIDATION ===
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      clearErrors();

      if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters');
        valid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        showError(email, 'Enter a valid email address');
        valid = false;
      }

      if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters');
        valid = false;
      }

      if (valid) {
        alert('Thank you! Your message has been sent to Nik Naks Simbas.');
        contactForm.reset();
      }
    });
  }

  // === ENQUIRY FORM VALIDATION ===
  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      const product = document.getElementById('product');
      const quantity = document.getElementById('quantity');
      const phone = document.getElementById('phone');
      clearErrors();

      if (product.value === '') {
        showError(product, 'Please select a flavor');
        valid = false;
      }

      if (quantity.value < 1) {
        showError(quantity, 'Quantity must be at least 1');
        valid = false;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone.value.replace(/\s/g, ''))) {
        showError(phone, 'Enter a valid 10-digit phone number');
        valid = false;
      }

      if (valid) {
        const price = product.value === 'cheesy-kota' || product.value === 'flamin-hot' || product.value === 'chillies-cheese' ? 13.99 : 12.99;
        const cost = (price * quantity.value).toFixed(2);
        alert(`Enquiry received! Estimated cost for ${quantity.value} x ${product.options[product.selectedIndex].text}: R${cost}. We’ll contact you soon.`);
        enquiryForm.reset();
      }
    });
  }

  function showError(input, message) {
    const error = document.createElement('small');
    error.className = 'error';
    error.textContent = message;
    input.parentElement.appendChild(error);
    input.classList.add('invalid');
  }

  function clearErrors() {
    document.querySelectorAll('.error').forEach(e => e.remove());
    document.querySelectorAll('.invalid').forEach(i => i.classList.remove('invalid'));
  }
});