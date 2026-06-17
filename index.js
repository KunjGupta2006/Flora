// Global System Utilities
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Navigation Controls
const bottomNavContainer = document.querySelector('.bottom-nav');
const navItems = document.querySelectorAll('.nav-item');

// Filter Sidebar Controls
const filterIconBtn = document.getElementById('filter-icon');
const filtersSidebar = document.querySelector('.filters-sidebar');
const priceSliderInput = document.getElementById('filter-price');
const priceDisplayValue = document.getElementById('price-display');
const lightCheckboxes = document.querySelectorAll('input[name="light"]');
const maintenanceRadioBtns = document.querySelectorAll('input[name="maintenance"]');

// Product Layout Stream Components
const productsGridContainer = document.querySelector('.products-grid');
const productCardsList = document.querySelectorAll('.card-div');

console.log("hello");

//toggle theme
let flag = 1;
themeToggleBtn.addEventListener("click", () => {
    console.log("changing theme");
    bodyElement.classList.toggle("dark-theme");
    if (flag) {
        themeToggleBtn.innerHTML = `<img src="./assets/sun.png" alt="toggle theme button"/>`;
        flag = 0;
    } else {
        themeToggleBtn.innerHTML = `<img src="./assets/moon.png" alt="toggle theme button"/>`;
        flag = 1;
    }
});

// Toggle filter sidebar layout states via main element classes
if (filterIconBtn && filtersSidebar) {
    const mainContainer = document.querySelector('main');
    
    filterIconBtn.addEventListener('click', () => {
        console.log("filter toggle");
        mainContainer.classList.toggle('filters-hidden');
    });
}

// Live price slider display update
if (priceSliderInput && priceDisplayValue) {
    priceSliderInput.addEventListener('input', (event) => {
        priceDisplayValue.textContent = event.target.value;
    });
}

// Product interactive quantity selectors
productCardsList.forEach(card => {
    const decrementQtyBtn = card.querySelector('.btn-decrement');
    const incrementQtyBtn = card.querySelector('.btn-increment');
    const currentQtyText = card.querySelector('.item-qty-input');

    if (decrementQtyBtn && incrementQtyBtn && currentQtyText) {
        let quantityCount = parseInt(currentQtyText.textContent) || 0;

        incrementQtyBtn.addEventListener('click', () => {
            if (quantityCount < 100) {
                quantityCount++;
                currentQtyText.textContent = quantityCount;
            }
        });

        decrementQtyBtn.addEventListener('click', () => {
            if (quantityCount > 0) {
                quantityCount--;
                currentQtyText.textContent = quantityCount;
            }
        });
    }
});