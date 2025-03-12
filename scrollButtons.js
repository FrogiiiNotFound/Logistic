document.addEventListener('DOMContentLoaded', function () {
    const scrollDownButton = document.querySelector('.home__scroll-down');
    const servicesSection = document.querySelector('.services');

    if (scrollDownButton && servicesSection) {
        scrollDownButton.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если это ссылка)

            // Прокручиваем страницу до блока .services
            servicesSection.scrollIntoView({
                behavior: 'smooth', // Добавляем плавную прокрутку
                block: 'start'     // Выравниваем блок по верхнему краю
            });
        });
    } else {
        console.error('Элемент .home__scroll-down или .services не найден.');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const upButton = document.querySelector('.footer__up-button');
    const homeSection = document.querySelector('.home');

    if (upButton && homeSection) {
        upButton.addEventListener('click', function (event) {
            event.preventDefault();

            homeSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    } else {
        console.error('Элемент .footer__up-button или .home не найден.');
    }
});

