(function() {
  const hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.navToggle.addEventListener('click', function(e) {
    hamburger.doToggle(e);
  });
  hamburger.nav.addEventListener('click', function(e) {
    hamburger.doToggle(e);
  });
})();

const navItems = document.getElementsByClassName('number-menu');

function onHover(index) {
  navItems[index].classList.add('image-mode');
}

function mOut(index) {
  navItems[index].classList.remove('image-mode');
}
