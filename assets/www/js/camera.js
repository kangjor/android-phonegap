function getTakePhoto() {
  navigator.camera.getPicture( cameraSuccess, cameraError, {quality:50} );
}

// 디바이스로 부터 사진어플을 가져와서 제대로 사진을 찍었다면 호출되는 콜백함수 cameraSuccess
function cameraSuccess(imageURI) {
  var image = document.getElementById('imageview1');
  image.style.display='block';
  image.src = imageURI;
}

// 사진찍는데 오류가 있다면 호출되는 콜백함수
function cameraError(message) {
    alert('Failed because: ' + message);
}