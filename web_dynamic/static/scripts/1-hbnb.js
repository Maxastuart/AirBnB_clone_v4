$(function () {
  const chosen_amenties = {};

  $('div.amenties li input').change(
    function () {
      if ($(this).is(':checked')) {
        chosen_amenties[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete chosen_amenties[$(this).attr('data-id')];
      }
      $('div.amenties h4').html(Object.values(chosen_amenties).join(', ') || '&nbsp');
   });
});