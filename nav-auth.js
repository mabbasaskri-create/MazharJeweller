(function() {
  var userData = localStorage.getItem('mjUser');
  if (!userData) return;
  var user = JSON.parse(userData);
  var isAdmin = user.email === 'm.abbas.askri@gmail.com';
  var btns = document.querySelectorAll('.nav-icon-btn[aria-label="Account"]');
  btns.forEach(function(btn) {
    btn.innerHTML = isAdmin ? '👤 <span class="auth-tick admin">A</span>' : '👤 <span class="auth-tick">✓</span>';
    btn.style.position = 'relative';
    btn.onclick = isAdmin
      ? function() { window.location.href = 'admin.html'; }
      : function() { window.location.href = 'login.html'; };
  });
  var style = document.createElement('style');
  style.textContent = '.auth-tick{position:absolute;bottom:-2px;right:-4px;font-size:10px;color:#22c55e;font-weight:700;background:var(--white);border-radius:50%;width:16px;height:16px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);line-height:1}.auth-tick.admin{color:var(--gold,#b8965a);font-size:9px;font-weight:600}';
  document.head.appendChild(style);
})();
