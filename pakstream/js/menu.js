document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.querySelector('nav');
  var label = document.querySelector('.nav-toggle-label');
  if (!navToggle || !nav || !label) return;

  label.addEventListener('click', function (e) {
    e.preventDefault();
    navToggle.checked = !navToggle.checked;
    navToggle.dispatchEvent(new Event('change'));
  });

  navToggle.addEventListener('change', function () {
    if (navToggle.checked) {
      history.pushState({ menuOpen: true }, '');
    } else if (history.state && history.state.menuOpen) {
      history.back();
    }
  });

  document.addEventListener('click', function (e) {
    if (navToggle.checked && !nav.contains(e.target) && !label.contains(e.target)) {
      navToggle.checked = false;
      navToggle.dispatchEvent(new Event('change'));
    }
  });

  window.addEventListener('popstate', function () {
    if (navToggle.checked) {
      navToggle.checked = false;
    }
  });
});
