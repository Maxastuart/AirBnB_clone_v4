$(function () {
  const chosen_amenities = {};

  $('div.amenities li input').change(
    function () {
      if ($(this).is(':checked')) {
        chosen_amenities[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete chosen_amenities[$(this).attr('data-id')];
      }
      $('div.amenities h4').html(Object.values(chosen_amenities).join(', ') || '&nbsp;');
    });

  $.getJson("http://0.0.0.0:5001/api/v1/status/", function (data) {
    if (data === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
   }); 
  });