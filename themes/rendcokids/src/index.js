
import './js/navigation';
import './js/skip-link-focus-fix';
import 'lazysizes';
import AOS from 'aos';

AOS.init({
  once: true,
  offset: -100
});

import Tobi from 'rqrauhvmra__tobi';

import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

import './sass/style.scss';
import 'rqrauhvmra__tobi/css/tobi.min.css';
import 'aos/dist/aos.css';

require('css.escape');

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

let musicButton = document.querySelector('.music-button');
musicButton.addEventListener('click', function(event) {
  this.classList.toggle('active');
  setTimeout(() => {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': offset(musicButton).top
    });
  }, 400);
});

window.onload=function() {


  var tobi = new Tobi({
    autoplayVideo: true
  }); 
  

    
}

