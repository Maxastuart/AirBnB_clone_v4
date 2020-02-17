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

  $.getJSON('http://localhost:5001/api/v1/status/', data => {
    if (data === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  $.ajax({
    url: 'http://localhost:5001/api/v1/places_search',
    type: 'POST',
    contentType: 'application/javascript',
    dataType: 'JSON',
    data: JSON.stringify({}),
    success: data => {
      data.forEach(place => {
        $('section.places').append(
          `<article>
              <div class="title">
                  <h2>${place.name}</h2>
                  <div class="price_by_night">
                      $${place.price_by_night}
                  </div>
              </div>
              <div class="information">
                  <div class="max_guest">
                      <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                      <br />
                      ${place.max_guest} Guests
                  </div>
                  <div class="number_rooms">
                      <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
                      <br />
                      ${place.number_rooms} Bedrooms
                  </div>
                  <div class="number_bathrooms">
                      <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
                      <br />
                      ${place.number_bathrooms} Bathroom
                  </div>
              </div>
              <div class="description">
                  ${place.description}
              </div>
          </article>`);
      });
    }
  });
});
