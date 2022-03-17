function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 19.874194, lng: -98.952942};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Tizayuca Hidalgo' // Title Location
    });
}
