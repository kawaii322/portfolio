let myMap, head, insertBefore, appendChild;

head = document.getElementsByTagName('head')[0];
insertBefore = head.insertBefore;
appendChild = head.appendChild;

head.insertBefore = function (newElement, referenceElement) {
	if (newElement.type === 'text/css') {
			return;
		}
	insertBefore.call(head, newElement, referenceElement);
};
    
head.appendChild = function (newElement, referenceElement) {
	if (newElement.type === 'text/css') {
		return;
	}
	appendChild.call(head, newElement, referenceElement);
};

function createMap (ymaps) {

	if(myMap) {
		myMap.destroy();
	}

	changeBackgroundLoaderMap(false);

	myMap = new ymaps.Map('map', {
		center: [49,33],
		zoom: 6,
		controls: []
	}, {
		searchControlProvider: 'yandex#search'
	});

	myMap.behaviors.disable([
		'dblClickZoom',
		'drag', 
		'leftMouseButtonMagnifier',
		'multiTouch',
		'rightMouseButtonMagnifier',
		'routeEditor',
		'ruler',
		'scrollZoom'
	]);

	let myPlacemark = new ymaps.Placemark([48.56217600000001, 39.2495104], null, {
		iconLayout: 'default#image',
		iconImageHref: "./img/placemark.png",
		iconImageSize: [25, 36],
		iconImageOffset: [-10, -36]
	});

	myMap.geoObjects.add(myPlacemark);
	
}

function loadScript (url, callback) {
	let body = document.getElementsByTagName("body")[0];
	let script = document.createElement("script");
	script.rel = "preconnect";
	script.defer = true;
	script.type = "text/javascript";
	script.charset = "utf-8";
	script.src = url;
	body.appendChild(script);
	script.onload = function () {
		callback();
	}
}

function changeBackgroundColorMap (color) {
	document.getElementsByClassName('map')[0].style.backgroundColor = color;
}

function changeBackgroundLoaderMap (loader) {
	if (loader) {
		document.getElementsByClassName('map')[0].style.backgroundImage = "url('img/loader.gif')";
		document.getElementsByClassName('map')[0].style.backgroundRepeat = "no-repeat";
		document.getElementsByClassName('map')[0].style.backgroundPosition = "center";
	} else {
		document.getElementsByClassName('map')[0].style.backgroundImage = "none";
	}
}