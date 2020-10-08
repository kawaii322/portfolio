let languageButtons = document.getElementById("languageButtons");

let languageObject = {
	"ru" : {
		"innerHTML" : {
			"title" : "Портфолио",
			"aboutMe" : "Обо мне",
			"projects" : "Проекты",
			"contacts" : "Контакты",
			"listSchool" : "В 2016 году закончил школу-гимназию №60 им.200-летия г.Луганска.",
			"listUniversity_1" : "Луганский государственный университет имени Владимира Даля, факультет «Компьютерные системы и технологии», направление подготовки «Информационные системы и технологии», поступил на курс в 2016 году. В 2020 году получил степень бакалавра. На данный момент обучаюсь в магистратуре.",
			"listUniversity_2" : "Также защитил бакалаврскую работу в России. В БГТУ им. В.Г. Шухова.",
			"listBackend" : "PHP, MySQL",
			"listFrontend" : "JavaScript, HTML, CSS",
			"listOOP" : "Java, C/C++",
			"commHeader" : "Связаться",
			"country" : "Страна Украина, город Луганск",
			"email" : "zer0charon@gmail.com",
			"phone_1" : "380953473098",
			"phone_2" : "380721306604"
		},
		"placeholder" : {
			"namePlaceholder" : "Имя",
			"emailPlaceholder" : "Почта",
			"phonePlaceholder" : "Телефон",
			"addressPlaceholder" : "Адрес",
			"themePLaceholder" : "Тема",
			"messagePlaceholder" : "Добавьте сообщение..."
		},
		"value" : {
			"submitPlaceholder" : "Отправить"
		}
	},
	"en" : {
		"innerHTML" : {
			"title" : "Portfolio",
			"aboutMe" : "About me",
			"projects" : "Projects",
			"contacts" : "Contacts",
			"listSchool" : "In 2016 graduated from the school-gymnasium No. 60 named after the 200th anniversary of Luhansk.",
			"listUniversity_1" : "Luhansk state University named after Vladimir Dal, faculty of computer systems and technologies, training area 'Information systems and technologies', entered the course in 2016. In 2020 received a bachelor's degree. I am currently studying for a master's degree.",
			"listUniversity_2" : "Also defended bachelor's work in Russia. In BSTU named after V. G. Shukhov.",
			"listBackend" : "PHP, MySQL",
			"listFrontend" : "JavaScript, HTML, CSS",
			"listOOP" : "Java, C/C++",
			"commHeader" : "Contact",
			"country" : "Country Ukraine, city of Luhansk",
			"email" : "zer0charon@gmail.com",
			"phone_1" : "380953473098",
			"phone_2" : "380721306604"
		},
		"placeholder" : {
			"namePlaceholder" : "Name",
			"emailPlaceholder" : "Email",
			"phonePlaceholder" : "Phone",
			"addressPlaceholder" : "Address",
			"themePLaceholder" : "Theme",
			"messagePlaceholder" : "Add message..."
		},
		"value" : {
			"submitPlaceholder" : "Send"
		}
	}
};

changeBackgroundLoaderMap(true);
changeBackgroundColorMap("#fff");
changeLanguage(document.documentElement.lang);
languageButtons.addEventListener('click', function(event) {
	changeLanguage(event.target.className);
});

function changeLanguage (targetLanguage) {
	for (let language in languageObject) {
		let from = targetLanguage.search(language);
		let to = targetLanguage.length;
		targetLanguage = targetLanguage.substring(from,to);
		if (language == targetLanguage) {
			for (let attribute in languageObject[language]) {
				if (attribute == "innerHTML") {
					for (let data in languageObject[language][attribute]) {
						document.getElementById(data).innerHTML = languageObject[language][attribute][data];
					}
				}
				if (attribute == "placeholder") {
					for (let data in languageObject[language][attribute]) {
						document.getElementById(data).placeholder = languageObject[language][attribute][data];
					}
				}
				if (attribute == "value") {
					for (let data in languageObject[language][attribute]) {
						document.getElementById(data).value = languageObject[language][attribute][data];
					}
				}
			}
			
			let src = "https://api-maps.yandex.ru/2.1/?apikey=ccc72bf4-e88e-4f3b-8778-b6ec9afb1dc8&lang=" + language + "_RU";

			loadScript (src, function() {
				ymaps.load(createMap);
			});
		}
	}
}


