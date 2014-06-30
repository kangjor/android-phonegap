// 위도와 경도를 저장해주는 변수 선언
lati=null;
longi=null;
// GPS값을 읽어 드리는 메소드
function getGPS() {
	navigator.geolocation.getCurrentPosition(savePosition, failgps);
}
//GPS 신호를 잡았다면 position이라는 객체를 리턴해줌
function savePosition(position) {
	// 위도와 경도 변수에 값을 넣어줌 
	lati = position.coords.latitude;
	longi = position.coords.longitude;
}
// GPS신호를 읽는 오류가 있다면
function failgps() {
	alert("gps error");
}

/*
 * 파일에 데이터를 쓰기 위한 메소드 작성
 */
function setWrite() {
	getGPS();
	// 파일시스템에 접속이 가능하는지에 대한 여부에 따라 접속이 가능하면 
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, error);
}
// 파일시스템에 접속이 가능하면호출되는 메소드로서 sd카드에 접근하여 readme.txt파일을 가져옴
// 만약 해당 파일이 없다면 옵션에서 해당 파일명을 만들어서 가져옴
function gotFS(fileSystem) {
	fileSystem.root.getFile("readme.txt", {create: true, exclusive:false}, gotFileEntry, error);
}
// readme.txt 파일에 접근이 되었다면 쓸수가 있다면 gotFileWriter메소드를 콜백
function gotFileEntry(fileEntry) {
	fileEntry.createWriter(gotFileWriter, error);
}
// 모든 분비가 끝났다면 해당파일에 데이터를 쓰시오
function gotFileWriter(writer) {
	// 변수에 저장된 위도와 경도를 readme.txt파일에 데이터를 쓴다.
	writer.write(lati + " " + longi);
	$('#textfile').html('done');
}
// 파일시스템에 접근하지 못한다면 호출하는 메소드
function error(message) {
	alert('error = ' + message);
}


/*
 * 파일에서 데이터를 가져오는 메소드
 */
function getWrite() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS1, error);
}
function gotFS1(fileSystem) {
  fileSystem.root.getFile("readme.txt", null, gotFileEntry1, error);
}

function gotFileEntry1(fileEntry) {
  fileEntry.file(gotFile, error);
}

function gotFile(file){
  readAsText(file);
}
// 실제 readme.txt파일에 접근하여 데이터를 읽어옴
function readAsText(file) {
  var reader = new FileReader();
  reader.onloadend = function(evt) {
    $('#textfile').html("<b>Read as text </b><br>" + evt.target.result);
  };
  reader.readAsText(file);
}