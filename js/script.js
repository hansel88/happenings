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
    label: 'Sentrum Scene',
    map: map,
    title: 'Sentrum Scene'
  });

    marker.addListener('click', function() {
		window.location.href = "details.html";
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
			$('#side').animate({width: "80%"}, 500);
			$('#side').css('display', 'block'); 
			$('#side-container').delay(300).animate({opacity: 1 }, 700);
		}
		else if($('#side').css('width') != 0){
			$('#side').delay(300).animate({width: 0 }, 300);
			$('#side-container').animate({opacity: 0 }, 200); 
		}
	});

	$('#map').click(function(){
		if($('#side').css('width') != 0){
			$('#side').delay(300).animate({width: 0 }, 300);
			$('#side-container').animate({opacity: 0 }, 200); 
		}

	});

	$("[name='my-checkbox']").bootstrapSwitch();
};

function replaceClass(elt, oldClass, newClass) {
    var oldRE = RegExp('\\b'+oldClass+'\\b');
    elt.className = elt.className.replace(oldRE, newClass);
}
function toggle(elt, on, off) {
    var onRE = RegExp('\\b'+on+'\\b');
    if (onRE.test(elt.className)) {
        elt.className = elt.className.replace(onRE, off);
    } else {
        replaceClass(elt, off, on);
    }
}

init();


})();

