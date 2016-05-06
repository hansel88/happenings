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
    };
};
    init();
    
})();