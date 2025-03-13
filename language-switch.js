const languageSwitch = document.querySelectorAll(".header__language-switch-wrap");
const dot = document.querySelectorAll(".header__language-dot");

function isIndexPL() {
    return window.location.pathname.includes("index-pl.html");
}

function setLanguageState(isPL) {
    localStorage.setItem("isPL", isPL);
}

function getLanguageState() {
    const storedState = localStorage.getItem("isPL");
    return storedState === "true";
}


languageSwitch.forEach(element => {
    element.addEventListener("click", () => {
        dot.forEach(el => el.classList.remove("switched"));

        const isPL = !isIndexPL();
        setLanguageState(isPL);

        if (isPL) {
            if (dot.length > 0) {
                dot[0].classList.add("switched");
            }
            window.location.href = "index-pl.html";
        } else {
            window.location.href = "index.html";
        }
    });
});

window.addEventListener("load", () => {
    const isPL = getLanguageState();

    if (isPL) {
        if (dot.length > 0) {
            dot[0].classList.add("switched");
        }
    } else {
        dot.forEach(el => el.classList.remove("switched"));
    }

});

if (isIndexPL()) {
    setLanguageState(true);
    if (dot.length > 0) {
        dot[0].classList.add("switched");
    }
} else {
    setLanguageState(false);
}








document.addEventListener("DOMContentLoaded", function () {
    const sloganTruck = document.querySelector(".slogan__truck");
    const perksTruck = document.querySelector(".perks__truck");
    const slogan = document.querySelector(".slogan");
    const perks = document.querySelector(".perks"); // Assuming you have a .perks element

    function updateTruckPosition() {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Slogan Truck
        if (sloganTruck) {
            const sloganRect = slogan.getBoundingClientRect();
            const sloganTruckWidth = sloganTruck.offsetWidth;

            if (sloganRect.bottom < 0) {
                sloganTruck.style.left = `-${sloganTruckWidth}px`;
                return;
            }

            if (sloganRect.top > windowHeight) {
                sloganTruck.style.left = `${windowWidth}px`;
                return;
            }

            const visibleHeight = Math.min(windowHeight, sloganRect.bottom) - Math.max(0, sloganRect.top);
            const scrollPercentage = visibleHeight / sloganRect.height;
            const truckPosition = scrollPercentage * (windowWidth + sloganTruckWidth) * 1;
            sloganTruck.style.left = `${truckPosition - sloganTruckWidth}px`;
        }

        // Perks Truck (Left to Right)
        if (perksTruck) {
            const perksRect = perks.getBoundingClientRect();
            const perksTruckWidth = perksTruck.offsetWidth;

            if (perksRect.bottom < 0) {
                perksTruck.style.left = `-${perksTruckWidth}px`; // Start from the left
                return;
            }

            if (perksRect.top > windowHeight) {
                perksTruck.style.left = `${windowWidth}px`; // End on the right
                return;
            }

            const visibleHeight = Math.min(windowHeight, perksRect.bottom) - Math.max(0, perksRect.top);
            const scrollPercentage = visibleHeight / perksRect.height;
            const truckPosition = scrollPercentage * (windowWidth + perksTruckWidth) * 1;
            perksTruck.style.left = `${truckPosition - perksTruckWidth}px`; // Standard movement (left to right)
        }
    }

    // Обновляем позицию грузовиков при прокрутке
    window.addEventListener("scroll", updateTruckPosition);

    // Обновляем позицию грузовиков при загрузке страницы (если страница загружается не в самом верху)
    updateTruckPosition();

    // Обновляем позицию грузовиков при изменении размера окна
    window.addEventListener("resize", updateTruckPosition);
});







