let menuNavigation = document.querySelectorAll('.menuNavigation');
let navigation = document.getElementById('navigation');
let menuArray = new Map([
	['aboutMe', 'info'],
	['projects', 'myProjects'],
	['contacts', 'communication']
]);

navigation.addEventListener ('mouseover', function(event) {
	for (let i = 0; menuNavigation.length > i; i++) {
		if(event.target.id == menuNavigation[i].id) {
			document.getElementById(String(event.target.id)).style.color = '#fff';
		} else {
			document.getElementById(String(menuNavigation[i].id)).style.color = '#aaaaaa';
		}
	}
});

navigation.addEventListener ('mouseout', function(event) {
	for (let i = 0; menuNavigation.length > i; i++) {
		document.getElementById(String(menuNavigation[i].id)).style.color = '#DBC8BE';
	}
});

navigation.addEventListener('click', function(event) {
	menuArray.forEach(function(value,key) {
		if (event.target.id == key) {
			document.getElementById(value).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	});
});