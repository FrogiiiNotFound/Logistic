document.addEventListener('DOMContentLoaded', function () {
    const linkAboutButtons = document.querySelectorAll('.link-about');
    const infoBlock = document.querySelector('.info');

    if (!infoBlock) {
        console.error('Блок с классом "info" не найден.');
        return; // Прекратить выполнение, если блок "info" не найден
    }

    linkAboutButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвратить стандартное поведение ссылки (если это ссылка)

            const infoBlockPosition = infoBlock.offsetTop; // Получить положение блока "info" относительно верха документа

            window.scrollTo({
                top: infoBlockPosition,
                behavior: 'smooth' // Включить плавную прокрутку
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const linkServicesButtons = document.querySelectorAll('.link-services');
    const servicesBlock = document.querySelector('.services');

    if (!servicesBlock) {
        console.error('Блок с классом "services" не найден.');
        return; // Прекратить выполнение, если блок "services" не найден
    }

    linkServicesButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвратить стандартное поведение ссылки (если это ссылка)

            const servicesBlockPosition = servicesBlock.offsetTop; // Получить положение блока "services" относительно верха документа

            window.scrollTo({
                top: servicesBlockPosition,
                behavior: 'smooth' // Включить плавную прокрутку
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const linkContactsButtons = document.querySelectorAll('.link-contacts');
    const contactBlock = document.querySelector('.contact');

    if (!contactBlock) {
        console.error('Блок с классом "contact" не найден.');
        return; // Прекратить выполнение, если блок "contact" не найден
    }

    linkContactsButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвратить стандартное поведение ссылки (если это ссылка)

            const contactBlockPosition = contactBlock.offsetTop; // Получить положение блока "contact" относительно верха документа

            window.scrollTo({
                top: contactBlockPosition,
                behavior: 'smooth' // Включить плавную прокрутку
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Получаем все элементы с классом 'to-contact-us'
    const contactButtons = document.querySelectorAll('.to-contact-us');

    // Добавляем обработчик клика для каждой кнопки
    contactButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если это ссылка)

            // Находим элемент с классом 'contact'
            const contactSection = document.querySelector('.contact');

            if (contactSection) {
                // Используем плавною прокрутку к элементу
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error("Не найден элемент с классом 'contact'");
            }
        });
    });
});
