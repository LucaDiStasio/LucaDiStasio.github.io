//=====================================================================================
// Import Google map
//=====================================================================================
var zoomVal = 5;
var currentPosition = {lat: 65.5, lng: 22.1};

var mapCanvas = document.getElementById("map");

var mapOptions = {
  center: currentPosition,
  zoom: zoomVal
}

var map = new google.maps.Map(mapCanvas, mapOptions);

var currentMarker = new google.maps.Marker({
  position: currentPosition,
  map: map,
  title: 'I''m here'
});
