function initMap()
{
	var newmarker;
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
	var labelIndex = 0;
	var markersarray=[];
	var map = new google.maps.Map(document.getElementById('map2'), {
  		center: {lat:26.682451 , lng:7.985057},
  		scrollwheel: true,
  		zoom: 2,
  		mapTypeId: google.maps.MapTypeId.TERRAIN,
	});
	console.log(map);
	for (i = 0 ; i < pointstab.length ; i++ )
		{
			var point = {lat: pointstab[i][0], lng: pointstab[i][1]};
			var marker = new google.maps.Marker({
			    position: point,
			    map: map,
			    title: pointstab[i][2],
			    label: labels[labelIndex++ % labels.length],
			});
			markersarray.push(point);
		}
	marker.setMap(map);
	google.maps.event.addListener(map, 'click', function(event) {
	    $('#newpointlat').val(event.latLng.lat());
		$('#newpointlng').val(event.latLng.lng());
	    if(newmarker == null){
	    	newmarker = new google.maps.Marker({
 				position: event.latLng,
 				map: map
			});
			console.log('yop');
	    }	
	    else{
	    	newmarker.setMap(null);
	    	console.log('ok');
        	newmarker = new google.maps.Marker({
 				position: event.latLng,
 				map: map
			});
		}
	});
	var tripPath = new google.maps.Polyline({
		path: markersarray,
		geodesic: true,
		strokeColor: '#008000',
		strokeOpacity: 0.9,
		strokeWeight: 3
	});

	tripPath.setMap(map);	
}
