document.addEventListener('DOMContentLoaded', function (event) {
    new WOW().init();
});

let arrayAnimation = [
    {
        elementClass: '.c-header-logo',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '.o-header-menu',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '.o-language',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '.o-welcome',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '.o-welcome-item',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '.c-welcome-item__text',
        effect: 'fadeOut',
        duration: '4000'
    },
    {
        elementClass: '.o-about-me-list--first',
        effect: 'fadeInLeft',
        duration: '1000'
    },
    {
        elementClass: '.o-about-me-list--second',
        effect: 'fadeInRight',
        duration: '1000'
    },
    {
        elementClass: '.o-projects-list',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '#first-banner',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '.o-communication--first',
        effect: 'fadeInLeft',
        duration: '1000'
    },
    {
        elementClass: '.o-communication--second',
        effect: 'fadeInRight',
        duration: '1000'
    },
    {
        elementClass: '#second-banner',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '.o-map',
        effect: 'fadeIn',
        duration: '1000'
    },
    {
        elementClass: '#vk-image',
        effect: 'popIn',
        duration: '1000'
    },
    {
        elementClass: '#telegram-image',
        effect: 'popIn',
        duration: '1000'
    },
    {
        elementClass: '#footer-text',
        effect: 'popIn',
        duration: '1000'
    }
];

let arrayReplacedAnimation = [
    {
        elementClass: '.o-communication--first',
        effect: 'fadeIn',
        duration: '1000'
    }
];

if (document.documentElement.clientWidth <= 1150) {
    arrayAnimation.forEach((item, index) => {
        let found = arrayReplacedAnimation.find(i => i.elementClass == item.elementClass);
        if (found) {
            arrayAnimation[index] = found;
        }
    })
}

arrayAnimation.forEach(item => {
    document.querySelector(item.elementClass).classList.add(
        'wow',
        'vivify',
        item.effect,
        'duration-' + item.duration
    );
});