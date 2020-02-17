$(function () {
  const chosenAmenities = {};

  $('div.amenities li input').change(
    function () {
      if ($(this).is(':checked')) {
        chosenAmenities[($(this).attr('data-id'))] = ($(this).attr('data-name'));
      } else {
        delete chosenAmenities[($(this).attr('data-id'))];
      }
      if (chosenAmenities.length > 0) {
        $('div.amenities h4').innerHTML = chosenAmenities.values().join(', ');
      } else {
        $('div.amenities h4').innerHTML = '&nbsp;';
      }
    });
});
