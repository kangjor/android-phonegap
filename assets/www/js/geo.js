function getCurPosition() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


function getWatchPosition() {
   // Throw an error if no update is received every 30 seconds
    var options = { timeout: 30000 };
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

function getClearPosition() {
  navigator.geolocation.clearWatch(watchID);
	$('#text').html('');
}

// GPS값을 불러왔을때 호출되는 콜백 함수
function onSuccess(position) {
  $('#text').html(
    'Latitude: '          + position.coords.latitude          + '<br>' +
    'Longitude: '         + position.coords.longitude         + '<br>' +
    'Altitude: '          + position.coords.altitude          + '<br>' +
    'Accuracy: '          + position.coords.accuracy          + '<br>' +
    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
    'Heading: '           + position.coords.heading           + '<br>' +
    'Speed: '             + position.coords.speed             + '<br>' +
    'Timestamp: '         + position.timestamp                + '<br>'
  );

}

// GPS값 불러올때 오류 발생시 호출되는 콜백함수
function onError(error) {
    alert(
      'code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n'
      );
}
