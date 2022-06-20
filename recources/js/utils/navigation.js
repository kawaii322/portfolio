const menuNav = document.getElementsByClassName('o-header-menu-nav')[0];
const menuNavButtons = document.querySelectorAll('.c-header-menu-nav__button');

if (menuNav && menuNavButtons) {
    menuNav.addEventListener('mouseover', function (event) {
        if (event.target.id) {
            for (let item of menuNavButtons) {
                if (event.target.id == item.id) {
                    document.getElementById(event.target.id).style.color = '#FFFFFF';
                } else {
                    document.getElementById(item.id).style.color = '#AAAAAA';
                }
            }
        } else {
            for (let item of menuNavButtons) {
                document.getElementById(item.id).style.color = '#DBC8BE';
            }
        }
    });

    menuNav.addEventListener('mouseout', function (event) {
        for (let item of menuNavButtons) {
            document.getElementById(item.id).style.color = '#DBC8BE';
        }
    });

    menuNav.addEventListener('click', function (event) {
        const menuObj = {
            'about-me': 'about-me-list',
            'projects': 'projects-list',
            'contacts': 'communication',
        };

        if (event.target.id && menuObj[event.target.id]) {
            document.getElementById(menuObj[event.target.id]).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    });
}