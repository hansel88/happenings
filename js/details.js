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

init = function(){
	var chosenLocation = getParameterByName('location');
    
    if(chosenLocation == 'sentrumScene'){
        $('.details-header').text("Scentrum Scene");
        $('.details-image').attr("src", "../assets/images/SentrumScene.jpg");
        $('.details-info').text("Sentrum Scene er et innendørs konsertlokale på Arbeidersamfunnets plass i Oslo. Sentrum Scene er en del av Rockefeller Music Hall Company og har plass til ca 1750 tilskuere.");
        //$(events listing);
    } else if(chosenLocation == 'justisen') {
        $('.details-header').text("Justisen");
        $('.details-image').attr("src", "../assets/images/Justisen_3.jpg");
        $('.details-info').text("Masse info om Justisen dette as.");
   
    } else if(chosenLocation == 'dateraTilHagen') {
        $('.details-header').text("Justisen");
        $('.details-image').attr("src", "../assets/images/Justisen_3.jpg");
        $('.details-info').text("Masse info om Justisen dette as.");
    };

    $('.check-in-button-details').click(function(event){
        event.stopPropagation();
        if( $('#checkin').css('display') == 'none'){
          $('#checkin').animate({height: '210px'}, 300).css('display', 'block'); 
          $('#checkin-container').delay(0).animate({opacity: 1 }, 700);
        }
    })

    $('.checkin-img').click(function(){
          $('#checkin-container').animate({opacity: 0 }, 200);
          $('#checkin').animate({height: 0}, 500).delay(500).css('display', 'none');
          $('#checkin').css('height', 0);
          $('#toastMessage').text('You have successfully checked in at ' + $('.details-header').text());
          $('#toast').animate({top: '0px' }, 300).delay(3500).animate({top: '-40px'}, 600);
    })

    $('html').click(function() {
        if( $('#checkin').css('display') != 'none'){
          $('#checkin-container').animate({opacity: 0 }, 200);
          $('#checkin').animate({height: 0}, 500).delay(500).css('display', 'none');
          $('#checkin').css('height', 0);
      }
    });

    $('#checkin').click(function(event){
        event.stopPropagation();
    });
};
    init();
    
})();