$(function () {
  const chosen_amenities = {};

  $('div.amenities li input').change(
    function () {
      if ($(this).is(':checked')) {
        chosen_amenities[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete chosen_amenities[$(this).attr('data-id')];
      }
      $('div.amenities h4').html(Object.values(chosen_amenities).join(', ') || '&nbsp;');
   });
});