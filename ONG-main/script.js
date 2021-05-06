function showPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else {
        alert("Tu navegador no soporta geolocalización");
    }
}

function showMap(position) {

    lat = position.coords.latitude;
    long = position.coords.longitude;
    var latlong = new google.maps.LatLng(lat, long);

    var myOptions = {
        center: latlong,
        zoom: 16,
        mapTypeControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    }

    var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
    var marker = new google.maps.Marker({ position: latlong, map: map, title: "Estas aquí!" });
}

function showError(error) {
    if (error.code == 1) {
        result.innerHTML = "has denegado el acceso a la geolocalizacion";
    } else if (error.code == 2) {
        result.innerHTML = "La posicion no puede ser encontrada";
    } else if (error.code == 3) {
        result.innerHTML = "El intento agoto el tiempo delimitado";
    } else {
        result.innerHTML = "Geolocalizacion fallida";
    }
}