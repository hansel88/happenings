(function(){

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

  function initMap() {
    $('#map').css('height', window.innerHeight+'px');
    $('#map').css('width', window.innerWidth+'px');
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 59.913869, lng: 10.752245},
      zoom: 15
    });


  var marker = new google.maps.Marker({
    position: {lat: 59.913897, lng: 10.749489},
    map: map,
    title: 'Sentrum Scene'
  });

 	google.maps.event.addListener(marker, 'click', function() {
        window.location('');        
    });

   $( window ).resize(function() {
	    $('#map').css('height', window.innerHeight+'px');
	    $('#map').css('width', window.innerWidth+'px');
	});

  }





init = function(){
	var chosenActivity = getParameterByName('activity');
	initMap();

	$('.navbar-toggle').click(function(){
		if($('#side').css('width') == '0px'){
			$('#side').animate({width: "50%"}, 500);
		}
		else if($('#side').css('width') != 0){
			$('#side').animate({width: "0"}, 500);
		}
	});

	$('#map').click(function(){
		if($('#side').css('width') != 0){
			$('#side').animate({width: "0"}, 500);
		}

	});
};

init();


})();

