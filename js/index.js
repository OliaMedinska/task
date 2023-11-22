import { productItems } from '../data.js';
import { renderCards } from './card-render.js';

const searchInput = document.querySelector('.search-form__input');
const filterBtns = document.querySelectorAll('.filter__item');

// cards render
renderCards(productItems);

//for get inputValue
searchInput.addEventListener('input', () => {
    allFilters();
});

filterBtns.forEach((item) => {
    const btnPrimary = item.querySelector('.btn-primary span');
    const btnItems = item.querySelectorAll('.filter__btn--item');

    btnItems.forEach((btn) => {
        btn.addEventListener('click', () => {
            let temp = btn.textContent;
            btn.textContent = btnPrimary.textContent;
            btnPrimary.textContent = temp;

            allFilters();
        })
    })
})


// filters
function filter (array) {
    //filter 4 filters
    let copyProductItems = [...array];

    const btnsPrimary = [...document.querySelectorAll('.btn-primary span')].map(btn => {
        return btn.textContent.trim();
    })


    copyProductItems = filterOne(btnsPrimary[0], copyProductItems)
    copyProductItems = filterTwo(btnsPrimary[1], copyProductItems)
    copyProductItems = filterThree(btnsPrimary[2], copyProductItems)
    copyProductItems = filterFour(btnsPrimary[3], copyProductItems)

    return copyProductItems
}

function filterOne (value, array) {
    if (value === 'Pojemność') {
       return [...array].sort((a, b) => a.capacity - b.capacity)
    } else if (value === 'Cena'){
        return [...array].sort((a, b) => a.price - b.price)
    } else {
       return array
    }
}

function filterTwo (value, array) {
    if (value === 'Pokaż wszystkie') {
        return array
    }

    return array.filter((item) => item.functions.toLowerCase().includes(value.toLowerCase()));
}

function filterThree (value, array) {
    if (value === 'Pokaż wszystkie') {
        return array
    }

    return array.filter((item) => item.energyClass.toLowerCase().includes(value.toLowerCase()));
}


function filterFour (value, array) {
    if (value === 'Pokaż wszystkie') {
        return array
    }

    const number = Number(value.split(' ')[0])

    return array.filter((item) => item.capacity === number);
}


// search + filters 
function allFilters () {
    const inputValue = searchInput.value;

    let filteredItems = productItems;
    
    if (inputValue !== "") {
        filteredItems = filteredItems.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
    }

    const filteredArray = filter(filteredItems);

    renderCards(filteredArray);
}
