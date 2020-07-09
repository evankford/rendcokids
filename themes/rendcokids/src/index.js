
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
      'top': offset(musicButton).top - 100
    });
    function clickOff(event) {
      // console.log(event.target.parentNode);
      if (event.target.parentNode != musicButton) {
        musicButton.classList.remove('active')
      }
    }
    window.addEventListener('click', clickOff(event));


  }, 400);
});

window.addEventListener('load', function() {


  var tobi = new Tobi({
    autoplayVideo: true
  });



})

///store

let storeUrl = 'https://rendcollective.com/collections/rend-co-kids/products.json';
let storeTarg = document.getElementById('store-target');

function loadJSon(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function () {

    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);

      return onDataLoad(data);
    } else {
      // We reached our target server, but it returned an error

    }
  };
  request.send();

}

function onDataLoad(data) {
  let products = data.products;
  let i = 0;
  products.forEach(product => {
    i++
    let el = document.createElement('a');
    el.classList.add('store-grid-item');
     el.setAttribute('href', 'https://rendcollective.com/products/' + product.handle)


     var img = product.images[0].src;
     var imgIndex = img.indexOf('.png');
     if (imgIndex < 0) {
       imgIndex = img.indexOf('.jpg');
     }

     var imgSrc = img.slice(0, imgIndex) + '_600x' + img.slice(imgIndex, img.length);


     el.innerHTML = `<div class="store-item">
        <div class="store-image">
          <img class="lazyload" src="` + imgSrc  + `">
        </div>
        <div class="store-bottom">
          <div class="store-info"><h4>`+ product.title + `</h4><span class="price">` + product.variants[0].price + `</span></div>
          <div class="button small">Shop</div>
        </div>
      </div>`;
      if (i <= 8) {
        storeTarg.append(el);
     }
  })

  let andEl = document.createElement('div');
  andEl.classList.add('store-extra', 'store-grid-item');
  // andEl.classList.add('store-grid-item');
  andEl.innerHTML = '<h3>Plus more great kids gifts, shirts, music + more!</h3><a class="button" href="https://rendcollective.com/collections/rend-co-kids">Shop All</a>'
  storeTarg.append(andEl);
  console.log(andEl);
}
if (storeTarg) {
  loadJSon(storeUrl)
}