var STORE_PRODUCTS_KEY = 'mjProducts';

var DEFAULT_PRODUCTS = [
  { id: 'p1', name: 'Swan Pendant Necklace, Rhodium Plated', category: 'necklaces', collection: 'Idyllia Collection', price: 12500, oldPrice: null, badge: 'BEST SELLER', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', description: '' },
  { id: 'p2', name: 'Star Choker Necklace, Rhodium Plated', category: 'necklaces', collection: 'Constella Collection', price: 15200, oldPrice: null, badge: '', image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=600&q=80', description: '' },
  { id: 'p3', name: 'Crystal Pearl Necklace, Gold Tone', category: 'necklaces', collection: 'Pearl Essence Collection', price: 16800, oldPrice: null, badge: 'NEW IN', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80', description: '' },
  { id: 'p4', name: 'Crystal Bib Necklace, Gold Plated', category: 'necklaces', collection: 'Regalia Collection', price: 28500, oldPrice: 35600, badge: 'SALE 20%', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80', description: '' },
  { id: 'p5', name: 'Oval Crystal Drop Earrings, Gold Tone', category: 'earrings', collection: 'Gema Collection', price: 8900, oldPrice: null, badge: 'BEST SELLER', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', description: '' },
  { id: 'p6', name: 'Heart Crystal Drop Earrings, Rose Gold', category: 'earrings', collection: 'Amour Collection', price: 9500, oldPrice: null, badge: 'NEW IN', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80', description: '' },
  { id: 'p7', name: 'Deep Garnet Drop Earrings, Silver Tone', category: 'earrings', collection: 'Garnet Collection', price: 10500, oldPrice: 12350, badge: 'SALE 15%', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', description: '' },
  { id: 'p8', name: 'Crystal Pearl Drop Earrings, Gold Tone', category: 'earrings', collection: 'Pearl Essence Collection', price: 11200, oldPrice: null, badge: '', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', description: '' },
  { id: 'p9', name: 'Solitaire Ring, Octagon Cut Crystal', category: 'rings', collection: 'Millenia Collection', price: 14700, oldPrice: 21000, badge: 'SALE 30%', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80', description: '' },
  { id: 'p10', name: 'Amethyst Gemstone Ring, Silver Plated', category: 'rings', collection: 'Amethyst Collection', price: 11900, oldPrice: null, badge: 'NEW IN', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&q=80', description: '' },
  { id: 'p11', name: 'Ruby Crystal Ring, Rose Gold Plated', category: 'rings', collection: 'Ruby Collection', price: 18900, oldPrice: null, badge: '', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', description: '' },
  { id: 'p12', name: 'Emerald Crystal Ring, Gold Tone', category: 'rings', collection: 'Emerald Collection', price: 21500, oldPrice: 23900, badge: 'SALE 10%', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80', description: '' },
  { id: 'p13', name: 'Crystal Tennis Bracelet, Rose Gold Plated', category: 'bracelets', collection: 'Matrix Collection', price: 18500, oldPrice: null, badge: 'BEST SELLER', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', description: '' },
  { id: 'p14', name: 'Crystal Pearl Bracelet, Gold Tone', category: 'bracelets', collection: 'Pearl Essence Collection', price: 13500, oldPrice: null, badge: 'NEW IN', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80', description: '' },
  { id: 'p15', name: 'Star Charm Bracelet, Rhodium Plated', category: 'bracelets', collection: 'Constella Collection', price: 14200, oldPrice: null, badge: '', image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=600&q=80', description: '' },
  { id: 'p16', name: 'Crystal Link Bracelet, Silver Tone', category: 'bracelets', collection: 'Lumina Collection', price: 16800, oldPrice: 21000, badge: 'SALE 20%', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', description: '' },
  { id: 'p17', name: 'Natural Amethyst Pendant, Silver Plated', category: 'gemstones', collection: 'Amethyst Collection', price: 14900, oldPrice: null, badge: 'BEST SELLER', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&q=80', description: '' },
  { id: 'p18', name: 'Green Emerald Stud Earrings, Gold Tone', category: 'gemstones', collection: 'Emerald Collection', price: 18500, oldPrice: null, badge: 'NEW IN', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80', description: '' },
  { id: 'p19', name: 'Natural Ruby Gemstone Ring, Rose Gold', category: 'gemstones', collection: 'Ruby Collection', price: 22400, oldPrice: 29900, badge: 'SALE 25%', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80', description: '' },
  { id: 'p20', name: 'Blue Sapphire Crystal Bracelet, Silver Tone', category: 'gemstones', collection: 'Sapphire Collection', price: 16700, oldPrice: null, badge: '', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80', description: '' },
  { id: 'p21', name: 'Flower Crystal Stud Earrings, Silver Tone', category: 'earrings', collection: 'Florere Collection', price: 6500, oldPrice: null, badge: 'NEW IN', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80', description: '' },
  { id: 'p22', name: 'Crystal Jewellery Gift Set, 3 Piece', category: 'necklaces', collection: 'Gift Set', price: 24900, oldPrice: null, badge: 'GIFT PICK', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', description: '' },
];

function getStoreProducts() {
  var stored = localStorage.getItem(STORE_PRODUCTS_KEY);
  if (stored) {
    try {
      var parsed = JSON.parse(stored);
      if (parsed && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  try {
    localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify(DEFAULT_PRODUCTS));
  } catch(e) {}
  return DEFAULT_PRODUCTS;
}

function getProductsByCategory(cat) {
  return getStoreProducts().filter(function(p) { return p.category === cat; });
}

function formatPrice(amount) {
  return 'PKR ' + Number(amount).toLocaleString('en-PK');
}

function badgeClass(badge) {
  if (!badge) return '';
  var b = badge.toUpperCase();
  if (b.indexOf('BEST') >= 0 || b.indexOf('GIFT') >= 0) return 'b-best';
  if (b.indexOf('SALE') >= 0) return 'b-sale';
  return 'b-new';
}

function productCardHTML(p) {
  var badgeHtml = p.badge ? '<span class="prod-badge ' + badgeClass(p.badge) + '">' + p.badge + '</span>' : '';
  var priceHtml = '<span class="p-now">' + formatPrice(p.price) + '</span>';
  if (p.oldPrice) {
    var off = Math.round((1 - p.price / p.oldPrice) * 100);
    priceHtml += ' <span class="p-old">' + formatPrice(p.oldPrice) + '</span>';
    if (off > 0) priceHtml += ' <span class="p-off">' + off + '% OFF</span>';
  }
  return '<div class="prod-card h-scroll-item">' +
    '<div class="prod-img">' +
    badgeHtml +
    '<button class="prod-wish">♡</button>' +
    '<img src="' + p.image + '" alt="' + p.name.replace(/"/g, '&quot;') + '" loading="lazy">' +
    '<button class="prod-add">ADD TO CART</button>' +
    '</div>' +
    '<p class="prod-coll">' + (p.collection || '') + '</p>' +
    '<p class="prod-name">' + p.name + '</p>' +
    '<div class="prod-price">' + priceHtml + '</div>' +
    '</div>';
}

function renderProductScroll(containerId, products) {
  var container = document.getElementById(containerId);
  if (!container) return;
  if (!products || products.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted);font-size:13px">No products yet. Add some from the admin panel.</div>';
    return;
  }
  container.innerHTML = '<div class="h-scroll">' + products.map(productCardHTML).join('') + '</div>' +
    '<button class="h-scroll-btn prev" aria-label="Previous">‹</button>' +
    '<button class="h-scroll-btn next" aria-label="Next">›</button>';
}

function renderProductGrid(containerId, products) {
  var container = document.getElementById(containerId);
  if (!container) return;
  if (!products || products.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:3rem 1rem;color:var(--muted);font-size:13px">No products in this category yet.</div>';
    return;
  }
  container.innerHTML = products.map(function(p) {
    var badgeHtml = p.badge ? '<span class="prod-badge ' + badgeClass(p.badge) + '">' + p.badge + '</span>' : '';
    var priceHtml = '<span class="p-now">' + formatPrice(p.price) + '</span>';
    if (p.oldPrice) {
      var off = Math.round((1 - p.price / p.oldPrice) * 100);
      priceHtml += ' <span class="p-old">' + formatPrice(p.oldPrice) + '</span>';
      if (off > 0) priceHtml += ' <span class="p-off">' + off + '% OFF</span>';
    }
    return '<div class="prod-card">' +
      '<div class="prod-img">' +
      badgeHtml +
      '<button class="prod-wish">♡</button>' +
      '<img src="' + p.image + '" alt="' + p.name.replace(/"/g, '&quot;') + '" loading="lazy">' +
      '<button class="prod-add">ADD TO CART</button>' +
      '</div>' +
      '<p class="prod-coll">' + (p.collection || '') + '</p>' +
      '<p class="prod-name">' + p.name + '</p>' +
      '<div class="prod-price">' + priceHtml + '</div>' +
      '</div>';
  }).join('');
}

function saveProductsToStorage(prods) {
  try { localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify(prods)); } catch(e) {}
}

function syncFromFirestore(callback) {
  if (typeof fbGetProducts !== 'function') {
    if (callback) callback();
    return;
  }
  fbGetProducts().then(function(list) {
    if (list && list.length > 0) {
      saveProductsToStorage(list);
    } else {
      var defaults = getStoreProducts();
      defaults.forEach(function(p) {
        var cp = JSON.parse(JSON.stringify(p));
        fbSaveProduct(cp).catch(function() {});
      });
    }
    if (callback) callback();
  }).catch(function() {
    if (callback) callback();
  });
}

function seedDefaultsToFirestore() {
  if (typeof fbGetProducts !== 'function') return;
  fbGetProducts().then(function(list) {
    if (!list || list.length === 0) {
      var defaults = getStoreProducts();
      defaults.forEach(function(p) {
        var cp = JSON.parse(JSON.stringify(p));
        fbSaveProduct(cp).catch(function() {});
      });
    }
  }).catch(function() {});
}

// ===== COLLECTIONS =====
function getCollections() {
  var stored = localStorage.getItem('mjCollections');
  if (stored) {
    try {
      var parsed = JSON.parse(stored);
      if (parsed && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  return [
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80', link: 'necklaces.html' },
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80', link: 'earrings.html' },
    { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80', link: 'rings.html' },
    { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80', link: 'bracelets.html' },
    { name: 'GemStones', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500&q=80', link: 'gemstones.html' }
  ];
}

function renderCollections(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var cols = getCollections();
  container.innerHTML = '<div class="h-scroll">' + cols.map(function(c) {
    return '<a href="' + c.link + '" class="cat-card2 h-scroll-item">' +
      '<img src="' + c.image + '" alt="' + c.name + '" loading="lazy">' +
      '<div class="cat-grad"></div>' +
      '<span class="cat-label">' + c.name + '</span>' +
      '<span class="cat-count"></span>' +
      '</a>';
  }).join('') + '</div>' +
    '<button class="h-scroll-btn prev" aria-label="Previous">‹</button>' +
    '<button class="h-scroll-btn next" aria-label="Next">›</button>';
}

(function initStore() {
  getStoreProducts();
  if (typeof fbGetProducts === 'function') {
    syncFromFirestore(function() {
      reRenderAll();
    });
  }
})();

function reRenderAll() {
  var scrollIds = ['scroll-necklaces', 'scroll-earrings', 'scroll-rings', 'scroll-bracelets', 'scroll-gemstones', 'scroll-best'];
  scrollIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      var cat = id.replace('scroll-', '');
      var prods = cat === 'best' ? getStoreProducts() : getProductsByCategory(cat);
      renderProductScroll(id, prods);
    }
  });
  var gridId = 'productGrid';
  var gridEl = document.getElementById(gridId);
  if (gridEl) {
    var cats = ['necklaces', 'earrings', 'rings', 'bracelets', 'gemstones'];
    var found = null;
    var page = window.location.pathname.split('/').pop().replace('.html', '');
    if (page === 'sparkle-pk-updated') page = 'necklaces';
    cats.forEach(function(c) {
      if (page === c) found = c;
    });
    if (found) renderProductGrid(gridId, getProductsByCategory(found));
  }
  var collectionsWrap = document.getElementById('collectionsWrap');
  if (collectionsWrap) {
    renderCollections('collectionsWrap');
  }
}
