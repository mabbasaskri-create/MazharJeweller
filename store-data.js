var STORE_PRODUCTS_KEY = 'mjProducts';

function getStoreProducts() {
  var stored = localStorage.getItem(STORE_PRODUCTS_KEY);
  if (stored) {
    try {
      var parsed = JSON.parse(stored);
      if (parsed && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  return [];
}

function getProductsByCategory(cat) {
  return getStoreProducts().filter(function(p) { return p.category === cat; });
}

function getProductById(id) {
  return getStoreProducts().find(function(p) { return p.id === id; }) || null;
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
  var link = 'product-detail.html?id=' + p.id;
  return '<a href="' + link + '" class="prod-card h-scroll-item">' +
    '<div class="prod-img">' +
    badgeHtml +
    '<button type="button" class="prod-wish" data-product-id="' + p.id + '" aria-label="Add to wishlist">♡</button>' +
    '<img src="' + p.image + '" alt="' + p.name.replace(/"/g, '&quot;') + '" loading="lazy">' +
    '<button class="prod-add">ADD TO CART</button>' +
    '</div>' +
    '<p class="prod-coll">' + (p.collection || '') + '</p>' +
    '<p class="prod-name">' + p.name + '</p>' +
    '<div class="prod-price">' + priceHtml + '</div>' +
    '</a>';
}

function renderProductScroll(containerId, products) {
  var container = document.getElementById(containerId);
  if (!container) return;
  if (!products || products.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted);font-size:13px">No products yet. Add some from the admin panel.</div>';
    return;
  }
  container.innerHTML = products.map(productCardHTML).join('');
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
    var link = 'product-detail.html?id=' + p.id;
    return '<a href="' + link + '" class="prod-card">' +
      '<div class="prod-img">' +
      badgeHtml +
      '<button type="button" class="prod-wish" data-product-id="' + p.id + '" aria-label="Add to wishlist">♡</button>' +
      '<img src="' + p.image + '" alt="' + p.name.replace(/"/g, '&quot;') + '" loading="lazy">' +
      '<button class="prod-add">ADD TO CART</button>' +
      '</div>' +
      '<p class="prod-coll">' + (p.collection || '') + '</p>' +
      '<p class="prod-name">' + p.name + '</p>' +
      '<div class="prod-price">' + priceHtml + '</div>' +
      '</a>';
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
    }
    if (callback) callback();
  }).catch(function() {
    if (callback) callback();
  });
  if (typeof fbGetHero === 'function') {
    fbGetHero().then(function(url) {
      if (url) {
        localStorage.setItem('mjHeroImage', url);
        var img = document.getElementById('heroImg');
        if (img) img.src = url;
      }
    }).catch(function() {});
  }
}

// ===== COLLECTIONS =====
var COLLECTION_DEFAULTS = [
  { id: 'c1', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80', link: 'necklaces.html' },
  { id: 'c2', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80', link: 'earrings.html' },
  { id: 'c3', name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80', link: 'rings.html' },
  { id: 'c4', name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80', link: 'bracelets.html' },
  { id: 'c5', name: 'GemStones', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500&q=80', link: 'gemstones.html' }
];

function getCollections() {
  var stored = localStorage.getItem('mjCollections');
  var list = null;
  if (stored) {
    try {
      var parsed = JSON.parse(stored);
      if (parsed && parsed.length > 0) list = parsed;
    } catch(e) {}
  }
  if (!list) return COLLECTION_DEFAULTS.slice();
  return COLLECTION_DEFAULTS.map(function(def) {
    var found = list.find(function(c) {
      return (c.id && c.id === def.id) || c.link === def.link || c.name === def.name;
    });
    if (!found) return def;
    return {
      id: found.id || def.id,
      name: found.name || def.name,
      image: found.image || def.image,
      link: found.link || def.link
    };
  });
}

function ensureCollectionsContainer() {
  var container = document.getElementById('scroll-collections');
  if (container) return container;
  var wrap = document.getElementById('collectionsWrap');
  if (!wrap || wrap.querySelector('.h-scroll')) return null;
  wrap.innerHTML = '<div class="h-scroll" id="scroll-collections"></div>' +
    '<button class="h-scroll-btn prev" aria-label="Previous">‹</button>' +
    '<button class="h-scroll-btn next" aria-label="Next">›</button>';
  return document.getElementById('scroll-collections');
}

function renderCollections() {
  var container = ensureCollectionsContainer();
  if (!container) return;
  var cols = getCollections();
  var products = getStoreProducts();
  container.innerHTML = cols.map(function(c) {
    var cat = (c.link || '').replace('.html', '');
    var count = products.filter(function(p) { return p.category === cat; }).length;
    var countHtml = count > 0 ? count + ' items' : '';
    return '<a href="' + c.link + '" class="cat-card2 h-scroll-item">' +
      '<img src="' + c.image + '" alt="' + c.name.replace(/"/g, '&quot;') + '" loading="lazy">' +
      '<div class="cat-grad"></div>' +
      '<span class="cat-label">' + c.name + '</span>' +
      (countHtml ? '<span class="cat-count">' + countHtml + '</span>' : '') +
      '</a>';
  }).join('');
}

function syncCollectionsFromFirestore(callback) {
  if (typeof fbGetCollections !== 'function') {
    if (callback) callback();
    return;
  }
  fbGetCollections().then(function(list) {
    if (list && list.length > 0) {
      try { localStorage.setItem('mjCollections', JSON.stringify(list)); } catch(e) {}
    }
    if (callback) callback();
  }).catch(function() {
    if (callback) callback();
  });
}

(function initStore() {
  reRenderAll();
  var pending = 0;
  function done() {
    pending--;
    if (pending <= 0) reRenderAll();
  }
  if (typeof fbGetProducts === 'function') {
    pending++;
    syncFromFirestore(done);
  }
  if (typeof fbGetCollections === 'function') {
    pending++;
    syncCollectionsFromFirestore(done);
  }
})();

function reRenderAll() {
  var scrollIds = ['scroll-necklaces', 'scroll-earrings', 'scroll-rings', 'scroll-bracelets', 'scroll-gemstones', 'scroll-best'];
  scrollIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      var cat = id.replace('scroll-', '');
      var prods = cat === 'best' ? getStoreProducts().filter(function(p) { return p.loved; }) : getProductsByCategory(cat);
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
  renderCollections();
  if (typeof initHorizontalScroll === 'function') initHorizontalScroll();
  if (window.MJStoreUI && typeof window.MJStoreUI.refreshWishlistUI === 'function') {
    window.MJStoreUI.refreshWishlistUI();
  }
  if (window.MJStoreUI && typeof window.MJStoreUI.refreshCartUI === 'function') {
    window.MJStoreUI.refreshCartUI();
  }
}

// ===== CART =====
var CART_KEY = 'mjCart';

function getCart() {
  try {
    var stored = localStorage.getItem(CART_KEY);
    if (stored) return JSON.parse(stored) || [];
  } catch(e) {}
  return [];
}

function saveCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e) {}
}

function addToCart(item) {
  if (!item || !item.id) return;
  var cart = getCart();
  var existing = cart.findIndex(function(x) { return x.id === item.id && x.size === (item.size||'') && x.color === (item.color||''); });
  if (existing >= 0) {
    cart[existing].qty += (item.qty || 1);
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, image: item.image, size: item.size || '', color: item.color || '', qty: item.qty || 1 });
  }
  saveCart(cart);
  if (window.MJStoreUI && typeof window.MJStoreUI.refreshCartUI === 'function') {
    window.MJStoreUI.refreshCartUI();
  }
}

function removeFromCart(index) {
  var cart = getCart();
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    saveCart(cart);
  }
  if (window.MJStoreUI && typeof window.MJStoreUI.refreshCartUI === 'function') {
    window.MJStoreUI.refreshCartUI();
  }
}

function updateCartQty(index, qty) {
  var cart = getCart();
  if (index >= 0 && index < cart.length) {
    cart[index].qty = Math.max(1, Math.min(99, qty));
    saveCart(cart);
  }
  if (window.MJStoreUI && typeof window.MJStoreUI.refreshCartUI === 'function') {
    window.MJStoreUI.refreshCartUI();
  }
}

function getCartCount() {
  return getCart().reduce(function(sum, x) { return sum + x.qty; }, 0);
}

function getCartTotal() {
  return getCart().reduce(function(sum, x) { return sum + x.price * x.qty; }, 0);
}

function clearCart() {
  try { localStorage.removeItem(CART_KEY); } catch(e) {}
  if (window.MJStoreUI && typeof window.MJStoreUI.refreshCartUI === 'function') {
    window.MJStoreUI.refreshCartUI();
  }
}
