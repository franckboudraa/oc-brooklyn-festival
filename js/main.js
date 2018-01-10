$(document).ready(function () {
  if (document.cookie === 'handicap=on') {
    $('body,h1,h2,h3,h4,h5,h6,button,input,textarea').css("font-family", 'Arial, sans-serif');
    $('#handicap').html('<i class="fa fa-toggle-on"></i> <i class="fa fa-wheelchair"></i>');
  }
  $('#handicap').on('click', function (e) {
    if (document.cookie === 'handicap=on') {
      $('h1,h2,h3,h4,h5,h6').css("font-family", 'Cabin Sketch, cursive');
      $('body,button,input,textarea').css("font-family", '"Neucha", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif');
      $('#handicap').html('<i class="fa fa-toggle-off"></i> <i class="fa fa-wheelchair"></i>');
      document.cookie = 'handicap=off';
    } else {
      $('body,h1,h2,h3,h4,h5,h6,button,input,textarea').css("font-family", 'Arial, sans-serif');
      $('#handicap').html('<i class="fa fa-toggle-on"></i> <i class="fa fa-wheelchair"></i>');
      document.cookie = 'handicap=on';
    }
  });
  $('form#reg').on('submit', function (e) {
    e.preventDefault();
    $('div#prereg').replaceWith('<div class="offset-2 col-8 alert alert-success" role="alert">\n' +
      '  <h4><i class="fa fa-check-circle"></i> You successfully pre-registered! Thank you!</h4>\n' +
      '</div>');
  });
  $('form#contact').on('submit', function (e) {
    e.preventDefault();
    $('div#contactform').replaceWith('' +
      '<div class="col-8 offset-2" id="contactform"><h1>Contact us</h1>\n' +
      ' <p><i class="fa fa-question-circle"></i> Want to know how to access to the festival ?' +
      '   <a href="access.html">Check the Practical info page</a></p>' +
      ' <div class="col-12 alert alert-success" role="alert">\n' +
      '  <h4><i class="fa fa-check-circle"></i> Your email has been sent! Thank you!</h4>\n' +
      ' </div>' +
      '</div>');
  });
});