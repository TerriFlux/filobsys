(function () {
  'use strict';

  /* ---------------- Sticky header show/hide ---------------- */
  var header = document.getElementById('site-header');
  var lastScroll = window.scrollY;

  window.addEventListener(
    'scroll',
    function () {
      var current = window.scrollY;
      if (!header) return;

      header.classList.toggle('header--scrolled', current > 8);

      if (current > lastScroll && current > 120) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }
      lastScroll = current;
    },
    { passive: true }
  );

  /* ---------------- Mobile nav ---------------- */
  var mobileNav = document.querySelector('[data-mobile-nav]');
  var navOpen = document.querySelector('[data-nav-open]');
  var navCloseEls = document.querySelectorAll('[data-nav-close]');

  if (mobileNav && navOpen) {
    navOpen.addEventListener('click', function () {
      mobileNav.classList.add('is-open');
      navOpen.setAttribute('aria-expanded', 'true');
    });
    navCloseEls.forEach(function (el) {
      el.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        navOpen.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
