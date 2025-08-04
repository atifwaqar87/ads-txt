document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.querySelector('nav');
  var label = document.querySelector('.nav-toggle-label');
  if (!navToggle || !nav || !label) return;

  label.addEventListener('click', function (e) {
    e.preventDefault();
    navToggle.checked = !navToggle.checked;
  });

  document.addEventListener('click', function (e) {
    if (navToggle.checked && !nav.contains(e.target) && !label.contains(e.target)) {
      navToggle.checked = false;
    }
  });

  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    var savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
});
