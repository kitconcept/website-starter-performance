import $ from 'jquery';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import Swiper from 'swiper/dist/js/swiper.jquery.umd.js';
import 'swiper/dist/css/swiper.css';
import './carousel.css';
import './scss/kitconcept.scss';
require('./img/favicon.ico');
require('./img/logo.png');
require('./img/logo-with-moto.png');
require('./img/down-arrow.png');
require('./img/logo-portals.png');
require('./img/service-link.png');
require('./img/logo-intranet.png');
require('./img/logo-mobile.png');
require('./img/logo-consulting.png');

$(document).ready(() => {
  $(".button-collapse").sideNav();

  // Swiper init
  let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
      const SLIDES_TITLE = ['Leistungsfähig', 'Erfolgreich', 'International', 'Sicher', 'Benutzerfreundlich', 'Skalierbar', 'Flexibel', 'Suchmaschinenfreundlich', 'Unabhängig', 'Kostenlos']
      return '<span class="' + className + '">' + SLIDES_TITLE[index] + '</span>';
    },
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })

  // smooth scrolling to any internal tags
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 500);
        return false;
      }
    }
  });
});
