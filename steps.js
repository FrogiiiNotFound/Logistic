const FADE_OUT_TIME = 100;
let currentlyFadingOut = null;
let lastActiveIndex = -1; // Индекс последнего активного блока

function handlePerksStepActivation() {
    const perksSteps = document.querySelectorAll('.perks__step');
    const windowHeight = window.innerHeight;
    const activationOffset = windowHeight / 8;
    const activationPoint = windowHeight / 2 + activationOffset;
    const threshold = windowHeight / 4;

    let currentActiveIndex = -1;
    let anyBlockInView = false; // Флаг, чтобы проверить, виден ли какой-либо блок

    for (let i = 0; i < perksSteps.length; i++) {
        const step = perksSteps[i];
        const rect = step.getBoundingClientRect();
        const stepTop = rect.top;
        const stepBottom = rect.bottom;

        if (stepTop < activationPoint + threshold && stepBottom > activationPoint - threshold) {
            currentActiveIndex = i;
            anyBlockInView = true; // Хотя бы один блок в поле зрения
            break; // Нашли первый активный, выходим из цикла
        }
    }

    // Обрабатываем предыдущий активный элемент (затухание)
    if (currentlyFadingOut) {
        clearTimeout(currentlyFadingOut.timeoutId);
        currentlyFadingOut.element.classList.remove('_temp-active');
        currentlyFadingOut.element.classList.remove('active');
        currentlyFadingOut = null;
    }

    // Сначала убираем класс active со всех элементов
    perksSteps.forEach(step => {
        step.classList.remove('active');
    });

    // Если найден новый активный элемент
    if (currentActiveIndex !== -1) {
        const newActiveElement = perksSteps[currentActiveIndex];
        newActiveElement.classList.add('active');
        lastActiveIndex = currentActiveIndex; // Обновляем индекс последнего активного блока

        // Находим все элементы, у которых был класс active *до* его добавления новому элементу
        perksSteps.forEach((step, index) => {
            if (index !== currentActiveIndex && step.classList.contains('active')) {
                step.classList.add('_temp-active');

                const timeoutId = setTimeout(() => {
                    step.classList.remove('active');
                    step.classList.remove('_temp-active');
                    currentlyFadingOut = null;
                }, FADE_OUT_TIME);

                currentlyFadingOut = { element: step, timeoutId };
                return; // Выходим, чтобы не запускать больше одного таймера затухания
            }
        });
    } else if (!anyBlockInView && perksSteps.length > 0) {
        // Если ни один блок не в поле зрения, активируем последний активный блок
        if (lastActiveIndex !== -1 && lastActiveIndex < perksSteps.length) {
            perksSteps[lastActiveIndex].classList.add('active');
        } else {
            // Если lastActiveIndex не установлен или выходит за границы, активируем последний блок
            perksSteps[perksSteps.length - 1].classList.add('active');
            lastActiveIndex = perksSteps.length - 1;
        }
    }
}

// Вызываем функцию при загрузке страницы и при прокрутке.
window.addEventListener('load', handlePerksStepActivation);
window.addEventListener('scroll', handlePerksStepActivation);
window.addEventListener('resize', handlePerksStepActivation);