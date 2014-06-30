// 현재 가속도를 한번만 읽어드리는 메소드 호출
function getCurAcc() {

	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}


function getWatchAcc() {
	// Update acceleration every 3 seconds
    var options = { frequency: 3000 };
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function setClearAcc() {
	navigator.accelerometer.clearWatch(watchID);
	$('#text').html('');
}

// onSuccess: Get a snapshot of the current acceleration
function onSuccess(acceleration) {
    $('#text').html('Acceleration X: ' + acceleration.x + '<br>' +
          'Acceleration Y: ' + acceleration.y + '<br>' +
          'Acceleration Z: ' + acceleration.z + '<br>' +
          'Timestamp: '      + acceleration.timestamp);
}

// onError: Failed to get the acceleration
function onError() {
    alert('Error!!!');
}
