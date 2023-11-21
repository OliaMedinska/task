import { productItems } from '../data.js';
import { renderCards } from './card-render.js';

const productList = document.querySelector('.cards');
const searchInput = document.querySelector('.search-form__input');
const filterBtns = document.querySelectorAll('.filter__item');
    

// cards render
renderCards(productItems);


searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value;

    if (inputValue === "") {
        renderCards(productItems);
        return;
    }

    const filteredItems = productItems.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    console.log(filteredItems);

    renderCards(filteredItems);


});

filterBtns.forEach((item) => {
    const btnPrimary = item.querySelector('.btn-primary span');
    const btnItems = item.querySelectorAll('.filter__btn--item');

    btnItems.forEach((btn) => {
        btn.addEventListener('click', () => {
            let temp = btn.textContent;
            btn.textContent = btnPrimary.textContent;
            btnPrimary.textContent = temp;

            filter();
        })
    })
});
