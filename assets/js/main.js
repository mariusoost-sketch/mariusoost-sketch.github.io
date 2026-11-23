// CUSiP site: mobile menu, header shadow, and the mailto enquiry builder. No tracking, no external calls.
(function () {
  var EMAIL = 'mariusoost@gmail.com';
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var links = document.getElementById('nav-links');

  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open menu'); }
    });
  }

  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  var form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (n) { var el = form.elements[n]; return el ? (el.value || '').trim() : ''; };
      var type = (form.querySelector('input[name="type"]:checked') || {}).value || 'General';
      var org = v('organisation');
      var subject = 'Book Marius: ' + type + ' enquiry' + (org ? ' from ' + org : '');
      var body = [
        'Dear Marius,', '',
        'Type of enquiry: ' + type,
        'Name: ' + v('name'),
        'Organisation: ' + org,
        'Date and location: ' + v('when'), '',
        v('message'), '',
        '(Sent via the CUSiP website)'
      ].join('\n');
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
