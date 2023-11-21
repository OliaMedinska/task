const productList = document.querySelector('.cards');
const total = document.querySelector('.total');

export function renderCards (items) {
    productList.innerHTML = items.map(({ img, name, capacity, dimensions, functions, energyClass, price, payments}) =>
    `<li class="cards__item">
    <img
    class="cards__image"
    src=${img}
    alt="product"
    width="200"
    />
    <a href="#">
    <h3 class="cards__header">
        ${name}
    </h3>
    </a>
    <ul class="cards__text-list">
    <li class="cards__text-item">
        <span class="cards__text-container">
        Pojemność (kg):
        </span>
        <span class="cards__text-item--accent">${capacity}</span>
    </li>
    <li class="cards__text-item">
        <span class="cards__text-container">
        Wymiary (GxSxW):
        </span>        
        <span class="cards__text-item--accent">${dimensions}</span>
    </li>
    <li class="cards__text-item">
        <span class="cards__text-container">
        Funkcje:
        </span>
        <span class="cards__text-item--accent"
        >${functions}</span
        >
    </li>
    <li class="cards__text-item cards__class">
        <span class="cards__text-container">
        Klasa energetyczna
        </span>
        <div class="cards__label-box">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="18"
        viewBox="0 0 49 18"
        fill="none"
        >
        <path
            d="M0 17V1C0 0.447715 0.447716 0 1 0H42.4648C42.7992 0 43.1114 0.167102 43.2969 0.4453L48.6302 8.4453C48.8541 8.7812 48.8541 9.2188 48.6302 9.5547L43.2969 17.5547C43.1114 17.8329 42.7992 18 42.4648 18H1C0.447715 18 0 17.5523 0 17Z"
            fill="#009949"
        />
        </svg>
        <p class="cards__text-svg">${energyClass}</p>
        </div>
    </li>
    <li class="cards__text-item cards__class">
        <span class="cards__text-container">
        Cena obowiązuje: 15.09.2022 - 21.09.2022
        </span>
    </li>
    </ul>
    <div class="cards__price">
    <p class="cards__price-text">${price}</p>
    <div class="cards__price--accent-list">
        <span class="cards__price--accent">00</span>
        <span class="cards__price--accent">zł</span>
    </div>
    </div>
    <p class="cards__credits">${payments}</p>
    <button id="" class="cards__button" type="button">WYBIERZ</button>
    </li>`).join('');


    ///total items count
    total.innerHTML = (
        `<p>Liczba wyników: ${items.length}</p>`
    );
}