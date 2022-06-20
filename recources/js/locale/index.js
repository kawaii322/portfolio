include(`recources/js/locale/lang/${document.documentElement.lang}.js`);

function include(url) {
    const body = document.getElementsByTagName('body')[0];
    if (body) {
        const script = document.createElement('script');
        script.defer = true;
        script.type = 'text/javascript';
        script.src = url;
        script.onload = function () {
            changeLanguage(getLanguage());
        }
        body.appendChild(script);
    }
}

function changeLanguage(language) {
    isActive();

    for (let attribute in language) {
        for (let id in language[attribute]) {
            document.getElementById(id)[attribute] = language[attribute][id];
        }
    }
}

function isActive() {
    const element = document.getElementById(document.documentElement.lang);

    const elements = document.getElementsByClassName('c-language-items__button');

    for (const e of elements) {
        e.className = 'c-language-items__button';
    }

    element.className += ' c-language-items__button--is-active';
}