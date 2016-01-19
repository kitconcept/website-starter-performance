import $ from 'jquery';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './carousel.css';
import './scss/kitconcept.scss';
require('./img/favicon.ico');
require('./img/logo.png');
require('./img/logo-with-moto.png');

$(document).ready(() => {
  $(".button-collapse").sideNav();
});
