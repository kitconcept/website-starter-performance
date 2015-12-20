import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(() => {
  $('#root').append(
    $(`<button type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-ok-sign"></span>
              </button>`));
});
