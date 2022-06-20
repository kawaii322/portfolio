const handleLanguage = document.querySelector('.o-language-items');

if (document.documentElement.clientWidth > 650) {
    include('recources/js/utils/map.js');
}
include('recources/js/locale/index.js');
include('recources/js/utils/navigation.js');

if (document.documentElement.clientWidth > 450) {
    addSeparatorPhone();
}

handleLanguage.addEventListener('click', function (event) {
    if (event.target.id && document.documentElement.lang != event.target.id) {
        document.documentElement.lang = event.target.id;

        deletePrevious();
        include(`recources/js/locale/lang/${document.documentElement.lang}.js`);

        if (document.documentElement.clientWidth > 650) {
            loadScript(`https://api-maps.yandex.ru/2.1.79/?lang=${document.documentElement.lang}_RU&apikey=ccc72bf4-e88e-4f3b-8778-b6ec9afb1dc8`, function () {
                ymaps.load(createMap);
            });
        }
    }
});

function include(url) {
    const body = document.getElementsByTagName('body')[0];
    if (body) {
        const script = document.createElement('script');
        script.defer = true;
        script.type = 'text/javascript';
        script.src = url;
        body.appendChild(script);
    }
}

function deletePrevious() {
    const oldScript = document.getElementsByTagName('script');

    for (let value of oldScript) {
        if (value.src && value.src.includes('recources/js/locale/lang/'))
            value.parentElement.removeChild(value);
    }

    for (let value of oldScript) {
        if (value.src && value.src.includes('recources/js/utils/map'))
            value.parentElement.removeChild(value);
    }

    for (let value of oldScript) {
        if (value.src && value.src.includes('api-maps.yandex.ru'))
            value.parentElement.removeChild(value);
    }
}

function addSeparatorPhone() {
    const phone = document.getElementById('communication-phone-ua--first');
    if (phone) {
        const span = document.createElement('span');
        span.innerHTML = ' | ';
        phone.after(span);
    }
}