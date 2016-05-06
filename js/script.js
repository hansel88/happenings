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
		window.location.href = "details.html?location=sentrumScene";
  });

  var marker2 = new google.maps.Marker({
    position: {lat: 59.9138697, lng: 10.752245},
    label: 'Justisen bar',
    map: map,
    title: 'Justisen Bar'
  });

    marker2.addListener('click', function() {
    window.location.href = "details.html?location=justisen";
  });

  var marker3 = new google.maps.Marker({
    position: {lat: 59.913269, lng: 10.760133},
    label: 'Dattera til Hagen',
    map: map,
    title: 'Dattera til Hagen'
  });

    marker3.addListener('click', function() {
    window.location.href = "details.html?location=dattera";
  });

	var image = 'https://bluedogtraining.com.au/assets/images/frontend/ui/icons/icon_small_location.png';
	var marker4 = new google.maps.Marker({
        position: {lat: 59.912410, lng: 10.752200},
        map: map,
        icon: image,
    	title: 'Your location'
    });
   $( window ).resize(function() {
	    $('#map').css('height', window.innerHeight+'px');
	    $('#map').css('width', window.innerWidth+'px');
	});

  }

init = function(){
	var chosenActivity = getParameterByName('activity');
  if(chosenActivity == 'all'){
    $( ".filter-input" ).each(function() {
      $(this).attr('checked', true);
    });
  }
  else if(chosenActivity == 'food'){
    $('#restaurant-filter').attr('checked', true);
    $('#cafe-filter').attr('checked', true);
  }
  else if(chosenActivity == 'clubs'){
    $('#pubs-filter').attr('checked', true);
    $('#clubs-filter').attr('checked', true);
  }
  else if(chosenActivity == 'entertainment'){
    $('#standup-filter').attr('checked', true);
    $('#concert-filter').attr('checked', true);
  }
	//$('#selectedActivity').text('- Nearby ' + chosenActivity);
	initMap();

	$('#settings-btn').click(function(){
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

  $('#filterLink').click(function(){
    if( $('#filter').css('display') == 'none'){
      $('#filter').css('display', 'inline'); 
      $('#filter').animate({height: '300px'}, 500);
      $('#filter-container').delay(350).animate({opacity: 1 }, 700);
    }else{
      $('#filter-container').animate({opacity: 0 }, 200);
      $('#filter').animate({height: 0}, 500).delay(500).css('display', 'none');
    }

  });
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

