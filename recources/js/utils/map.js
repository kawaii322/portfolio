let myMap;
const head = document.getElementsByTagName('head')[0];
const insertBefore = head.insertBefore;
const appendChild = head.appendChild;

if (head) {
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

	loadScript(`https://api-maps.yandex.ru/2.1.79/?lang=${document.documentElement.lang}_RU&apikey=ccc72bf4-e88e-4f3b-8778-b6ec9afb1dc8`, function () {
		ymaps.load(createMap);
	});
}

function createMap(ymaps) {
	if (myMap) {
		myMap.destroy();
	}

	myMap = new ymaps.Map('map', {
		center: [49, 33],
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

	const myPlacemark = new ymaps.Placemark([48.56217600000001, 39.2495104], null, {
		iconLayout: 'default#image',
		iconImageHref: './recources/images/map/placemark.png',
		iconImageSize: [25, 36],
		iconImageOffset: [-10, -36]
	});

	myMap.geoObjects.add(myPlacemark);

	changeBackgroundLoaderMap(false);
}

function loadScript(url, callback) {
	changeBackgroundLoaderMap(true);
	const body = document.getElementsByTagName('body')[0];
	if (body) {
		const script = document.createElement('script');
		script.defer = true;
		script.type = 'text/javascript';
		script.src = url;
		body.appendChild(script);
		script.onload = function () {
			callback();
		}
	}
}

function changeBackgroundLoaderMap(loader) {
	const map = document.getElementsByClassName('o-map')[0];
	if (map) {
		if (loader) {
			map.style.backgroundImage = 'url("recources/images/map/loader.gif")';
			map.style.backgroundRepeat = 'no-repeat';
			map.style.backgroundPosition = 'center';
		} else {
			map.style.backgroundImage = 'none';
		}
	}
}