(function() {
  fetch('/nav.html')
    .then(function(response) { return response.text(); })
    .then(function(html) {
      var placeholder = document.getElementById('nav-placeholder');
      if (placeholder) {
        placeholder.innerHTML = html;
        var script = document.createElement('script');
        script.src = '/pakstream/js/menu.js';
        document.body.appendChild(script);
      }
    });
})();
