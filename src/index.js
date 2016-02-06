import $ from 'jquery';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import Swiper from 'swiper/dist/js/swiper.jquery.umd.js';
import 'swiper/dist/css/swiper.css';
// import './js/kcpin.js';
// import './carousel.css';
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
require('./img/logo-white.png');

$(document).ready(() => {
  $(".button-collapse").sideNav();

  $('.leistung .sticky-portals-logo').pushpin({  top: $('.leistung .sticky-portals-logo').offset().top, offset: $(window).height() / 2 - 231/2, bottom: $('.leistung .sticky-consulting-logo').offset().top });
  $('.leistung .sticky-intranet-logo').pushpin({  top: $('.leistung .sticky-intranet-logo').offset().top, offset: $(window).height() / 2 - 231/2, bottom: $('.leistung .sticky-consulting-logo').offset().top });
  $('.leistung .sticky-mobile-logo').pushpin({  top: $('.leistung .sticky-mobile-logo').offset().top, offset: $(window).height() / 2 - 231/2, bottom: $('.leistung .sticky-consulting-logo').offset().top });
  $('.leistung .sticky-consulting-logo').pushpin({  top: $('.leistung .sticky-consulting-logo').offset().top, offset: $(window).height() / 2 - 231/2, bottom: $('.leistung .sticky-consulting-logo').offset().top + 1 });

  $(document).on("scroll",function(){
      if($(document).scrollTop()>55){
          $(".nav").addClass("nav-visible");
          $(".atf-nav").addClass("hide");
      } else{
          $(".atf-nav").removeClass("hide");
          $(".nav").removeClass("nav-visible");
      }
  });

  $('.scrollspy').scrollSpy();

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

        // Change class of the element
        $(this).parents("li").addClass("active").siblings().removeClass("active");

        return false;
      }
    }
  });
});
