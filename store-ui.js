(function() {
  var WISH_KEY = 'mjWish';
  var PRODUCTS_KEY = 'mjProducts';

  var SITE_PAGES = [
    { name: 'Home', link: 'index.html', type: 'page', keywords: 'home main shop' },
    { name: 'Necklaces & Pendants', link: 'necklaces.html', type: 'page', keywords: 'necklaces necklace pendant' },
    { name: 'Earrings', link: 'earrings.html', type: 'page', keywords: 'earrings earring jhumka' },
    { name: 'Rings', link: 'rings.html', type: 'page', keywords: 'rings ring band' },
    { name: 'Bracelets', link: 'bracelets.html', type: 'page', keywords: 'bracelets bracelet bangle' },
    { name: 'GemStones', link: 'gemstones.html', type: 'page', keywords: 'gemstones gemstone stone' },
    { name: 'Login / Account', link: 'login.html', type: 'page', keywords: 'login account sign in' }
  ];

  function getAllProducts() {
    if (typeof getStoreProducts === 'function') return getStoreProducts();
    try {
      var stored = localStorage.getItem(PRODUCTS_KEY);
      if (stored) {
        var parsed = JSON.parse(stored);
        if (parsed && parsed.length > 0) return parsed;
      }
    } catch(e) {}
    return [];
  }

  function getWishlist() {
    try {
      var stored = localStorage.getItem(WISH_KEY);
      if (stored) return JSON.parse(stored) || [];
    } catch(e) {}
    return [];
  }

  function saveWishlist(list) {
    try { localStorage.setItem(WISH_KEY, JSON.stringify(list)); } catch(e) {}
  }

  function isInWishlist(id) {
    return getWishlist().indexOf(id) >= 0;
  }

  function toggleWishlist(id) {
    if (!id) return false;
    var list = getWishlist();
    var idx = list.indexOf(id);
    if (idx >= 0) {
      list.splice(idx, 1);
      saveWishlist(list);
      return false;
    }
    list.push(id);
    saveWishlist(list);
    return true;
  }

  function removeFromWishlist(id) {
    var list = getWishlist().filter(function(x) { return x !== id; });
    saveWishlist(list);
  }

  function formatPrice(amount) {
    if (typeof window.formatPrice === 'function') return window.formatPrice(amount);
    return 'PKR ' + Number(amount).toLocaleString('en-PK');
  }

  function showToast(msg) {
    var el = document.getElementById('toast') || document.getElementById('mjToast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'mjToast';
      el.className = 'mj-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(function() { el.classList.remove('show'); }, 2000);
  }

  function injectStyles() {
    if (document.getElementById('mjStoreUiStyles')) return;
    var style = document.createElement('style');
    style.id = 'mjStoreUiStyles';
    style.textContent =
      '.prod-wish.active,.wish-btn.active{color:var(--red,#c0392b)!important;border-color:var(--red,#c0392b)!important}' +
      '.prod-wish.active{background:#fff5f5!important;opacity:1!important}' +
      '.nav-icon-btn .mj-badge{position:absolute;top:-4px;right:-6px;min-width:16px;height:16px;padding:0 4px;border-radius:999px;background:var(--red,#c0392b);color:#fff;font-size:9px;font-weight:600;display:flex;align-items:center;justify-content:center;line-height:1;font-family:Inter,sans-serif}' +
      '.nav-icon-btn.mj-has-badge{position:relative}' +
      '.mj-search,.mj-wish-panel{position:fixed;inset:0;z-index:10000;display:none;align-items:flex-start;justify-content:center;padding:5rem 1rem 1rem}' +
      '.mj-search.open,.mj-wish-panel.open{display:flex}' +
      '.mj-search-backdrop,.mj-wish-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(2px)}' +
      '.mj-search-box{position:relative;width:min(680px,100%);background:#fdfcf8;border:1px solid #e8e0d4;box-shadow:0 24px 80px rgba(0,0,0,.18);max-height:min(70vh,640px);display:flex;flex-direction:column;overflow:hidden}' +
      '.mj-search-input-wrap{display:flex;align-items:center;gap:.75rem;padding:1rem 1.1rem;border-bottom:1px solid #e8e0d4}' +
      '.mj-search-input-wrap span{font-size:18px;color:#888}' +
      '.mj-search-input{flex:1;border:none;outline:none;background:transparent;font-family:Inter,sans-serif;font-size:15px;color:#0a0a0a}' +
      '.mj-search-input::placeholder{color:#aaa}' +
      '.mj-search-close,.mj-wish-close{background:none;border:none;font-size:24px;cursor:pointer;color:#888;line-height:1;padding:4px}' +
      '.mj-search-results,.mj-wish-body{overflow-y:auto;padding:.5rem 0;max-height:calc(min(70vh,640px) - 64px)}' +
      '.mj-search-group{padding:.35rem 0 .75rem}' +
      '.mj-search-group-title{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#b8965a;padding:.35rem 1.1rem .5rem;font-weight:500}' +
      '.mj-search-item{display:flex;align-items:center;gap:.85rem;padding:.7rem 1.1rem;color:inherit;text-decoration:none;transition:background .15s}' +
      '.mj-search-item:hover,.mj-search-item:focus{background:#f5ede0;outline:none}' +
      '.mj-search-item img{width:52px;height:52px;object-fit:cover;border-radius:8px;border:1px solid #e8e0d4;flex-shrink:0;background:#fff}' +
      '.mj-search-item-icon{width:52px;height:52px;border-radius:8px;border:1px solid #e8e0d4;display:flex;align-items:center;justify-content:center;background:#f5ede0;font-size:20px;flex-shrink:0}' +
      '.mj-search-item-meta{min-width:0;flex:1}' +
      '.mj-search-item-name{font-size:14px;color:#0a0a0a;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.mj-search-item-sub{font-size:11px;color:#888;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.mj-search-empty{padding:2rem 1.1rem;text-align:center;color:#888;font-size:13px;line-height:1.6}' +
      '.mj-wish-drawer{position:absolute;top:0;right:0;width:min(420px,100%);height:100%;background:#fdfcf8;box-shadow:-8px 0 40px rgba(0,0,0,.12);display:flex;flex-direction:column;animation:mjSlideIn .25s ease}' +
      '@keyframes mjSlideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}' +
      '.mj-wish-head{display:flex;align-items:center;justify-content:space-between;padding:1.1rem 1.25rem;border-bottom:1px solid #e8e0d4}' +
      '.mj-wish-head h3{font-family:"Cormorant Garamond",serif;font-size:24px;font-weight:400;color:#0a0a0a}' +
      '.mj-wish-item{display:flex;gap:.85rem;padding:1rem 1.25rem;border-bottom:1px solid #e8e0d4;align-items:center}' +
      '.mj-wish-item img{width:72px;height:72px;object-fit:cover;border-radius:8px;border:1px solid #e8e0d4;flex-shrink:0}' +
      '.mj-wish-item-info{flex:1;min-width:0}' +
      '.mj-wish-item-name{font-size:13px;font-weight:500;color:#0a0a0a;margin-bottom:4px;line-height:1.4}' +
      '.mj-wish-item-price{font-size:12px;color:#b8965a;margin-bottom:8px}' +
      '.mj-wish-item-actions{display:flex;gap:.5rem;flex-wrap:wrap}' +
      '.mj-wish-item-actions a,.mj-wish-item-actions button{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;border:none;cursor:pointer;font-family:Inter,sans-serif;padding:7px 12px;text-decoration:none}' +
      '.mj-wish-view{background:#0a0a0a;color:#fff}' +
      '.mj-wish-remove{background:transparent;color:#888;border:1px solid #e8e0d4!important}' +
      '.mj-wish-empty{padding:3rem 1.5rem;text-align:center;color:#888;font-size:13px;line-height:1.7}' +
      '.mj-toast{position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#0a0a0a;color:#fff;padding:12px 24px;font-size:12px;letter-spacing:1px;border-radius:4px;z-index:10001;opacity:0;transition:opacity .3s;pointer-events:none;text-align:center}' +
      '.mj-toast.show{opacity:1}' +
      '.mj-cart-panel{position:fixed;inset:0;z-index:10000;display:none;align-items:flex-start;justify-content:center;padding:5rem 1rem 1rem}' +
      '.mj-cart-panel.open{display:flex}' +
      '.mj-cart-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(2px)}' +
      '.mj-cart-drawer{position:absolute;top:0;right:0;width:min(420px,100%);height:100%;background:#fdfcf8;box-shadow:-8px 0 40px rgba(0,0,0,.12);display:flex;flex-direction:column;animation:mjSlideIn .25s ease}' +
      '.mj-cart-head{display:flex;align-items:center;justify-content:space-between;padding:1.1rem 1.25rem;border-bottom:1px solid #e8e0d4}' +
      '.mj-cart-head h3{font-family:"Cormorant Garamond",serif;font-size:24px;font-weight:400;color:#0a0a0a}' +
      '.mj-cart-head h3 span{font-size:12px;font-family:Inter,sans-serif;color:#888;font-weight:400}' +
      '.mj-cart-close{background:none;border:none;font-size:24px;cursor:pointer;color:#888;line-height:1;padding:4px}' +
      '.mj-cart-body{overflow-y:auto;flex:1;padding:0}' +
      '.mj-cart-item{display:flex;gap:.85rem;padding:1rem 1.25rem;border-bottom:1px solid #e8e0d4;align-items:center}' +
      '.mj-cart-item img{width:72px;height:72px;object-fit:cover;border-radius:8px;border:1px solid #e8e0d4;flex-shrink:0}' +
      '.mj-cart-item-info{flex:1;min-width:0}' +
      '.mj-cart-item-name{font-size:13px;font-weight:500;color:#0a0a0a;margin-bottom:2px;line-height:1.4}' +
      '.mj-cart-item-meta{font-size:10px;color:#888;margin-bottom:4px}' +
      '.mj-cart-item-price{font-size:12px;color:#b8965a;margin-bottom:6px}' +
      '.mj-cart-qty-wrap{display:flex;align-items:center;gap:6px}' +
      '.mj-cart-qty-btn{width:26px;height:26px;border:1px solid #e8e0d4;background:#fff;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;font-family:Inter,sans-serif;color:#0a0a0a;border-radius:3px}' +
      '.mj-cart-qty-btn:hover{background:#f5ede0}' +
      '.mj-cart-qty-input{width:36px;height:26px;text-align:center;border:1px solid #e8e0d4;border-radius:3px;font-size:12px;font-family:Inter,sans-serif;color:#0a0a0a;outline:none;padding:0}' +
      '.mj-cart-qty-input:focus{border-color:#b8965a}' +
      '.mj-cart-remove{background:transparent;color:#888;border:none;cursor:pointer;font-size:16px;padding:4px;line-height:1}' +
      '.mj-cart-footer{padding:1rem 1.25rem;border-top:1px solid #e8e0d4}' +
      '.mj-cart-total{display:flex;justify-content:space-between;font-size:14px;font-weight:500;color:#0a0a0a;margin-bottom:12px}' +
      '.mj-cart-total span:last-child{color:#b8965a}' +
      '.mj-cart-checkout{width:100%;background:#0a0a0a;color:#fff;border:none;padding:12px;font-size:10px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;font-family:Inter,sans-serif}' +
      '.mj-cart-checkout:hover{background:var(--charcoal,#333)}' +
      '.mj-cart-empty{padding:3rem 1.5rem;text-align:center;color:#888;font-size:13px;line-height:1.7}' +
      '@media(max-width:767px){.mj-search{padding:4.5rem .75rem .75rem}.mj-wish-drawer{width:100%}.mj-cart-drawer{width:100%}.mj-toast{bottom:80px;font-size:11px;padding:10px 18px}}';
    document.head.appendChild(style);
  }

  function injectSearchModal() {
    if (document.getElementById('mjSearchModal')) return;
    var modal = document.createElement('div');
    modal.id = 'mjSearchModal';
    modal.className = 'mj-search';
    modal.innerHTML =
      '<div class="mj-search-backdrop" data-close-search></div>' +
      '<div class="mj-search-box" role="dialog" aria-modal="true" aria-label="Search">' +
        '<div class="mj-search-input-wrap">' +
          '<span>🔍</span>' +
          '<input class="mj-search-input" id="mjSearchInput" type="search" placeholder="Search products, categories, pages..." autocomplete="off">' +
          '<button class="mj-search-close" type="button" data-close-search aria-label="Close search">×</button>' +
        '</div>' +
        '<div class="mj-search-results" id="mjSearchResults"></div>' +
      '</div>';
    document.body.appendChild(modal);
  }

  function injectCartPanel() {
    if (document.getElementById('mjCartPanel')) return;
    var panel = document.createElement('div');
    panel.id = 'mjCartPanel';
    panel.className = 'mj-cart-panel';
    panel.innerHTML =
      '<div class="mj-cart-backdrop" data-close-cart></div>' +
      '<div class="mj-cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping Cart">' +
        '<div class="mj-cart-head">' +
          '<h3>Shopping Cart <span id="mjCartCount"></span></h3>' +
          '<button class="mj-cart-close" type="button" data-close-cart aria-label="Close cart">×</button>' +
        '</div>' +
        '<div class="mj-cart-body" id="mjCartBody"></div>' +
        '<div class="mj-cart-footer" id="mjCartFooter">' +
          '<div class="mj-cart-total"><span>Subtotal</span><span id="mjCartTotal">PKR 0</span></div>' +
          '<button class="mj-cart-checkout" onclick="location.href=\'checkout.html\'">Proceed to Checkout</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(panel);
  }

  function renderCartPanel() {
    var body = document.getElementById('mjCartBody');
    var footer = document.getElementById('mjCartFooter');
    var countEl = document.getElementById('mjCartCount');
    var totalEl = document.getElementById('mjCartTotal');
    if (!body) return;
    var cart = typeof getCart === 'function' ? getCart() : [];
    if (cart.length === 0) {
      body.innerHTML = '<div class="mj-cart-empty">Your cart is empty.<br>Browse products to add items.</div>';
      if (footer) footer.style.display = 'none';
      if (countEl) countEl.textContent = '';
      if (totalEl) totalEl.textContent = 'PKR 0';
      return;
    }
    if (footer) footer.style.display = '';
    var total = 0;
    body.innerHTML = cart.map(function(item, i) {
      var itemTotal = (item.price || 0) * (item.qty || 1);
      total += itemTotal;
      var meta = [item.size, item.color].filter(Boolean).join(' / ');
      return '<div class="mj-cart-item">' +
        '<img src="' + (item.image || '') + '" alt="' + (item.name || '').replace(/"/g, '&quot;') + '">' +
        '<div class="mj-cart-item-info">' +
          '<div class="mj-cart-item-name">' + (item.name || '') + '</div>' +
          (meta ? '<div class="mj-cart-item-meta">' + meta + '</div>' : '') +
          '<div class="mj-cart-item-price">' + formatPrice(item.price) + '</div>' +
          '<div class="mj-cart-qty-wrap">' +
            '<button class="mj-cart-qty-btn" data-cart-dec="' + i + '">−</button>' +
            '<input class="mj-cart-qty-input" type="text" value="' + item.qty + '" data-cart-qty="' + i + '" inputmode="numeric">' +
            '<button class="mj-cart-qty-btn" data-cart-inc="' + i + '">+</button>' +
            '<button class="mj-cart-remove" data-cart-remove="' + i + '" aria-label="Remove">✕</button>' +
          '</div>' +
        '</div></div>';
    }).join('');
    if (countEl) countEl.textContent = '(' + cart.reduce(function(s, x) { return s + x.qty; }, 0) + ')';
    if (totalEl) totalEl.textContent = formatPrice(total);
  }

  function openCart() {
    renderCartPanel();
    var panel = document.getElementById('mjCartPanel');
    if (!panel) return;
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    var panel = document.getElementById('mjCartPanel');
    if (!panel) return;
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }

  function refreshCartUI() {
    updateCartBadge();
    if (document.getElementById('mjCartPanel') && document.getElementById('mjCartPanel').classList.contains('open')) {
      renderCartPanel();
    }
  }

  function updateCartBadge() {
    var count = typeof getCartCount === 'function' ? getCartCount() : 0;
    document.querySelectorAll('.cart-btn').forEach(function(btn) {
      btn.classList.add('mj-has-badge');
      var badge = btn.querySelector('.mj-badge');
      if (count > 0) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'mj-badge';
          btn.appendChild(badge);
        }
        badge.textContent = count > 9 ? '9+' : String(count);
        badge.style.display = 'flex';
      } else if (badge) {
        badge.style.display = 'none';
      }
    });
  }

  function injectWishlistPanel() {
    if (document.getElementById('mjWishPanel')) return;
    var panel = document.createElement('div');
    panel.id = 'mjWishPanel';
    panel.className = 'mj-wish-panel';
    panel.innerHTML =
      '<div class="mj-wish-backdrop" data-close-wish></div>' +
      '<div class="mj-wish-drawer" role="dialog" aria-modal="true" aria-label="Wishlist">' +
        '<div class="mj-wish-head">' +
          '<h3>My Wishlist</h3>' +
          '<button class="mj-wish-close" type="button" data-close-wish aria-label="Close wishlist">×</button>' +
        '</div>' +
        '<div class="mj-wish-body" id="mjWishBody"></div>' +
      '</div>';
    document.body.appendChild(panel);
  }

  function normalize(str) {
    return (str || '').toLowerCase().trim();
  }

  function runSearch(query) {
    var q = normalize(query);
    if (!q) return { pages: SITE_PAGES.slice(0, 6), products: getAllProducts().slice(0, 8) };

    var pages = SITE_PAGES.filter(function(page) {
      return normalize(page.name).indexOf(q) >= 0 || normalize(page.keywords).indexOf(q) >= 0 || normalize(page.link).indexOf(q) >= 0;
    });

    var products = getAllProducts().filter(function(p) {
      var hay = [p.name, p.collection, p.category, p.description, p.badge].map(normalize).join(' ');
      return hay.indexOf(q) >= 0;
    });

    return { pages: pages, products: products };
  }

  function renderSearchResults(query) {
    var container = document.getElementById('mjSearchResults');
    if (!container) return;
    var results = runSearch(query);
    var html = '';

    if (results.pages.length > 0) {
      html += '<div class="mj-search-group"><div class="mj-search-group-title">Pages & Categories</div>';
      results.pages.forEach(function(page) {
        html += '<a class="mj-search-item" href="' + page.link + '">' +
          '<div class="mj-search-item-icon">📄</div>' +
          '<div class="mj-search-item-meta"><div class="mj-search-item-name">' + page.name + '</div>' +
          '<div class="mj-search-item-sub">Go to page</div></div></a>';
      });
      html += '</div>';
    }

    if (results.products.length > 0) {
      html += '<div class="mj-search-group"><div class="mj-search-group-title">Products</div>';
      results.products.forEach(function(p) {
        var sub = [p.collection, p.category].filter(Boolean).join(' · ');
        html += '<a class="mj-search-item" href="product-detail.html?id=' + encodeURIComponent(p.id) + '">' +
          '<img src="' + (p.image || '') + '" alt="">' +
          '<div class="mj-search-item-meta"><div class="mj-search-item-name">' + p.name + '</div>' +
          '<div class="mj-search-item-sub">' + formatPrice(p.price) + (sub ? ' · ' + sub : '') + '</div></div></a>';
      });
      html += '</div>';
    }

    if (!html) {
      html = '<div class="mj-search-empty">No results for "<strong>' + query.replace(/</g, '') + '</strong>".<br>Try another name, category, or page.</div>';
    }

    container.innerHTML = html;
  }

  function openSearch() {
    var modal = document.getElementById('mjSearchModal');
    var input = document.getElementById('mjSearchInput');
    if (!modal || !input) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderSearchResults('');
    setTimeout(function() { input.focus(); }, 50);
  }

  function closeSearch() {
    var modal = document.getElementById('mjSearchModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderWishlistPanel() {
    var body = document.getElementById('mjWishBody');
    if (!body) return;
    var ids = getWishlist();
    var products = getAllProducts();
    var items = ids.map(function(id) {
      return products.find(function(p) { return p.id === id; });
    }).filter(Boolean);

    if (items.length === 0) {
      body.innerHTML = '<div class="mj-wish-empty">Your wishlist is empty.<br>Tap ♡ on any product to save it here.</div>';
      return;
    }

    body.innerHTML = items.map(function(p) {
      return '<div class="mj-wish-item" data-wish-id="' + p.id + '">' +
        '<img src="' + (p.image || '') + '" alt="' + p.name.replace(/"/g, '&quot;') + '">' +
        '<div class="mj-wish-item-info">' +
          '<div class="mj-wish-item-name">' + p.name + '</div>' +
          '<div class="mj-wish-item-price">' + formatPrice(p.price) + '</div>' +
          '<div class="mj-wish-item-actions">' +
            '<a class="mj-wish-view" href="product-detail.html?id=' + encodeURIComponent(p.id) + '">View</a>' +
            '<button type="button" class="mj-wish-remove" data-remove-wish="' + p.id + '">Remove</button>' +
          '</div>' +
        '</div></div>';
    }).join('');
  }

  function openWishlist() {
    renderWishlistPanel();
    var panel = document.getElementById('mjWishPanel');
    if (!panel) return;
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeWishlist() {
    var panel = document.getElementById('mjWishPanel');
    if (!panel) return;
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateNavBadges() {
    var count = getWishlist().length;
    document.querySelectorAll('.nav-icon-btn[aria-label="Wishlist"]').forEach(function(btn) {
      btn.classList.add('mj-has-badge');
      var badge = btn.querySelector('.mj-badge');
      if (count > 0) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'mj-badge';
          btn.appendChild(badge);
        }
        badge.textContent = count > 9 ? '9+' : String(count);
        badge.style.display = 'flex';
      } else if (badge) {
        badge.style.display = 'none';
      }
    });
  }

  function refreshWishlistUI() {
    document.querySelectorAll('.prod-wish[data-product-id]').forEach(function(btn) {
      var id = btn.getAttribute('data-product-id');
      var active = isInWishlist(id);
      btn.classList.toggle('active', active);
      btn.textContent = active ? '♥' : '♡';
      btn.setAttribute('aria-label', active ? 'Remove from wishlist' : 'Add to wishlist');
    });

    document.querySelectorAll('.wish-btn[data-product-id], #detailWishBtn').forEach(function(btn) {
      var id = btn.getAttribute('data-product-id') || (typeof product !== 'undefined' && product ? product.id : '');
      if (!id) return;
      var active = isInWishlist(id);
      btn.classList.toggle('active', active);
      btn.textContent = active ? '♥' : '♡';
    });

    updateNavBadges();
    if (document.getElementById('mjWishPanel') && document.getElementById('mjWishPanel').classList.contains('open')) {
      renderWishlistPanel();
    }
  }

  function bindNavButtons() {
    document.querySelectorAll('.nav-icon-btn[aria-label="Search"]').forEach(function(btn) {
      btn.onclick = function(e) {
        e.preventDefault();
        openSearch();
      };
    });
    document.querySelectorAll('.nav-icon-btn[aria-label="Wishlist"]').forEach(function(btn) {
      btn.onclick = function(e) {
        e.preventDefault();
        openWishlist();
      };
    });
    document.querySelectorAll('.cart-btn').forEach(function(btn) {
      btn.onclick = function(e) {
        e.preventDefault();
        openCart();
      };
    });
  }

  function bindGlobalEvents() {
    document.addEventListener('click', function(e) {
      var wishBtn = e.target.closest('.prod-wish[data-product-id]');
      if (wishBtn) {
        e.preventDefault();
        e.stopPropagation();
        var id = wishBtn.getAttribute('data-product-id');
        var added = toggleWishlist(id);
        showToast(added ? 'Added to wishlist ♡' : 'Removed from wishlist');
        refreshWishlistUI();
        return;
      }

      if (e.target.matches('[data-close-search]')) closeSearch();
      if (e.target.matches('[data-close-wish]')) closeWishlist();
      if (e.target.matches('[data-close-cart]')) {
        closeCart();
        return;
      }

      var removeBtn = e.target.closest('[data-remove-wish]');
      if (removeBtn) {
        removeFromWishlist(removeBtn.getAttribute('data-remove-wish'));
        showToast('Removed from wishlist');
        refreshWishlistUI();
      }

      var cartDec = e.target.closest('[data-cart-dec]');
      if (cartDec && typeof updateCartQty === 'function') {
        var idx = parseInt(cartDec.getAttribute('data-cart-dec'), 10);
        var cart = typeof getCart === 'function' ? getCart() : [];
        if (idx >= 0 && idx < cart.length) {
          updateCartQty(idx, cart[idx].qty - 1);
          renderCartPanel();
        }
        return;
      }

      var cartInc = e.target.closest('[data-cart-inc]');
      if (cartInc && typeof updateCartQty === 'function') {
        var idx = parseInt(cartInc.getAttribute('data-cart-inc'), 10);
        var cart = typeof getCart === 'function' ? getCart() : [];
        if (idx >= 0 && idx < cart.length) {
          updateCartQty(idx, cart[idx].qty + 1);
          renderCartPanel();
        }
        return;
      }

      var cartRemove = e.target.closest('[data-cart-remove]');
      if (cartRemove && typeof removeFromCart === 'function') {
        var idx = parseInt(cartRemove.getAttribute('data-cart-remove'), 10);
        removeFromCart(idx);
        renderCartPanel();
        showToast('Removed from cart');
        return;
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeSearch();
        closeWishlist();
        closeCart();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        if (document.querySelector('.nav-icon-btn[aria-label="Search"]')) {
          e.preventDefault();
          openSearch();
        }
      }
    });

    var searchInput = document.getElementById('mjSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        renderSearchResults(searchInput.value);
      });
    }

    var searchModal = document.getElementById('mjSearchModal');
    if (searchModal) {
      searchModal.addEventListener('click', function(e) {
        if (e.target.classList.contains('mj-search-item')) closeSearch();
      });
    }

    document.addEventListener('change', function(e) {
      var qtyInput = e.target.closest('[data-cart-qty]');
      if (qtyInput && typeof updateCartQty === 'function') {
        var idx = parseInt(qtyInput.getAttribute('data-cart-qty'), 10);
        var val = parseInt(qtyInput.value, 10);
        if (!isNaN(val) && val >= 1) {
          updateCartQty(idx, Math.min(99, val));
        }
        renderCartPanel();
      }
    });
  }

  function init() {
    if (!document.querySelector('.nav-icon-btn[aria-label="Search"]') && !document.querySelector('.nav-icon-btn[aria-label="Wishlist"]') && !document.querySelector('.cart-btn') && !document.querySelector('.prod-wish')) {
      return;
    }
    injectStyles();
    injectSearchModal();
    injectWishlistPanel();
    injectCartPanel();
    bindNavButtons();
    bindGlobalEvents();
    refreshWishlistUI();
    refreshCartUI();
  }

  window.MJStoreUI = {
    toggleWishlist: toggleWishlist,
    isInWishlist: isInWishlist,
    refreshWishlistUI: refreshWishlistUI,
    openSearch: openSearch,
    openWishlist: openWishlist,
    refreshCartUI: refreshCartUI,
    openCart: openCart,
    closeCart: closeCart
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
