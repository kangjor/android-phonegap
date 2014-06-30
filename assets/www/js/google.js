// 구글 지도 보기 버튼 클릭시 호출되는 메소드
function googlemap() {
  // 지도에 대한 위도와 경도값을 얻어옴
  // 위치 정보를 사용할 수 있다면 locationsuccess 호출, 오류가 있다면 locationfail 호출
  navigator.geolocation.getCurrentPosition(locationsuccess, locationfail);
}

// 위치정보 얻어오는데 성공
function locationsuccess(position) {
  //지도위에 내위치에 대한 정보를 띄우고 핀을 고정시켜주는 메소드 호출 (내 위치의 위도와 경도값을 넘겨줌)
  showMap(position.coords.latitude, position.coords.longitude);
}
// 위치 정보 얻어오는데 실패
function locationfail() {
  alert('location fail');
}

// 구글지도위에 내위치에 대한 정보를 핀카터를 통하여 보여줌
function showMap(lati, longi) {
	// 구글 지도를 띄우기 위한 객체를 선언
	var map = new google.maps.LatLng(lati, longi);
	// 지도위에 옵션을 설정
	var options = {
		// 지도레벨을 16레벨로 설정. 최대 21레벨까지 존재 (모두지원 되지 않음);
		zoom: 16,
		// 지도의 중심에 내위치를 보여줌
		center: map,
		// 하이브리드, 위성, 2d인지를 설정
		mapTypeControl: false,
		navigationControlOptions: {
			style:google.maps.NavigationControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};  
	// html 소스안에 div 태그값을 읽어와 지도를 뿌려줌
  var el = document.getElementById('mapview');
  el.style.width = $(window).width() + "px";
  el.style.height = $(window).height()-100 + "px";
	// 설정된 구글맵 호출
	var mymap = new google.maps.Map(el, options);
	// 지도위에 마커를 뿌려줌
	var marker = new google.maps.Marker({position:map, map:mymap});
}