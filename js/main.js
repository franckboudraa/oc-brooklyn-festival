$(document).ready(function () {
  if (document.cookie === 'handicap=on') {
    $('body,h1,h2,h3,h4,h5,h6,button,input').css("font-family", 'Arial, sans-serif');
    $('#handicap').html('<i class="fa fa-toggle-on"></i> <i class="fa fa-wheelchair"></i>');
  }
  $('#handicap').on('click', function (e) {
    if (document.cookie === 'handicap=on') {
      $('h1,h2,h3,h4,h5,h6').css("font-family", 'Cabin Sketch, cursive');
      $('body,button,input').css("font-family", '"Neucha", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif');
      $('#handicap').html('<i class="fa fa-toggle-off"></i> <i class="fa fa-wheelchair"></i>');
      document.cookie = 'handicap=off';
    } else {
      $('body,h1,h2,h3,h4,h5,h6,button,input').css("font-family", 'Arial, sans-serif');
      $('#handicap').html('<i class="fa fa-toggle-on"></i> <i class="fa fa-wheelchair"></i>');
      document.cookie = 'handicap=on';
    }
  });
  $('#regform').on('submit', function (e) {
    e.preventDefault();
    $('div#prereg').replaceWith('<div class="offset-2 col-8 alert alert-success" role="alert">\n' +
      '  <h4><i class="fa fa-check-circle"></i> You successfully pre-registered! Thank you!</h4>\n' +
      '</div>');
  });
});