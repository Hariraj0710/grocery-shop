const API_URL = 'http://localhost:5000/api/products';

// On products page load
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productsGrid')) {
    fetchProducts();
    setupFilters();
  }
});

async function fetchProducts(search = '', category = '') {
  const grid = document.getElementById('productsGrid');
  if(!grid) return;
  
  grid.innerHTML = '<div style="text-align:center; width: 100%; grid-column: 1 / -1;"><i class="fa-solid fa-spinner fa-spin fa-2x"></i><br>Loading Products...</div>';
  
  try {
    let url = API_URL;
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (category && category !== 'All') params.append('category', category);
    if (params.toString()) url += `?${params.toString()}`;

    const res = await fetch(url);
    const products = await res.json();
    renderProducts(products);
  } catch (err) {
    grid.innerHTML = `<div style="text-align:center; color: red; grid-column: 1 / -1;">Failed to load products: ${err.message}</div>`;
  }
}

function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  if (!products.length) {
    grid.innerHTML = '<div style="text-align:center; grid-column: 1 / -1; color: var(--text-light);">No products found matching your criteria.</div>';
    return;
  }
  
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" class="product-image" onerror="this.src='https://via.placeholder.com/200?text=No+Image'">
      <div class="product-category">${p.category}</div>
      <h3 class="product-name">${p.name}</h3>
      <div class="product-quantity">${p.quantity}</div>
      <div class="product-price">₹${p.price}</div>
      <div class="card-actions">
        <a href="tel:+919876543210" class="btn btn-call"><i class="fa-solid fa-phone"></i> Call to Order</a>
        <a href="https://wa.me/919876543210?text=I am interested in ${p.name} (₹${p.price} for ${p.quantity})" target="_blank" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
      </div>
    </div>
  `).join('');
}

function setupFilters() {
  const searchInput = document.getElementById('searchInput');
  const tabs = document.querySelectorAll('.tab');
  
  let currentCategory = 'All';
  
  // Check URL params for category
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if(catParam) {
    currentCategory = catParam;
    tabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`.tab[data-category="${catParam}"]`)?.classList.add('active');
    fetchProducts('', currentCategory);
  }

  // category click
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      const target = e.target;
      target.classList.add('active');
      currentCategory = target.getAttribute('data-category');
      fetchProducts(searchInput.value, currentCategory);
    });
  });

  // search typing debounce
  let timeout = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetchProducts(e.target.value, currentCategory);
    }, 500);
  });
}
