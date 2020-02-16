$(document).ready(function(){
  const amenity_list = {};
  $('INPUT:checkbox').change(function() {
    if ($(this).is(':checked')) {
      let key = $(this).attr('data-id')
      let value = $(this).attr('data-name')
      amenity_list[key] = value
    }
    if (!$(this).is(':checked')) {
      delete amenity_list[$(this).attr('data-id')]
    }
  })
})
