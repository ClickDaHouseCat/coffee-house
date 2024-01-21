
////////////////////////////BURGER////////////////////////////////

const burger = document.querySelector('.burger-menu')
const burger_button = document.querySelector('.burger-icon')
const menuItems = document.querySelectorAll('.burger-li a');

burger_button.addEventListener('click', ()=>{
    burger.classList.toggle('hidden-burger')
    burger_button.classList.toggle('cross');
})

menuItems.forEach(item => {
  item.addEventListener('click', () => {
      burger.classList.toggle('hidden-burger');
      burger_button.classList.toggle('cross');
  });
});

function hideMenuOnResize() {
  if (window.innerWidth >= 769) {
      burger.classList.remove('hidden-burger');
      burger_button.classList.remove('cross');
  }
}

hideMenuOnResize();

window.addEventListener('resize', hideMenuOnResize);

////////////////////////////MENU-CHOICE////////////////////////////////

const coffee = document.querySelector('.menu-item-coffee')
const tea = document.querySelector('.menu-item-tea')
const dessert = document.querySelector('.menu-item-dessert')
const coffeeContainer = document.querySelector('.coffee-container')
const teaContainer = document.querySelector('.tea-container')
const dessertContainer = document.querySelector('.dessert-container')

tea.addEventListener('click', ()=>{
    coffeeContainer.classList.add('none')
    teaContainer.classList.remove('none')
    dessertContainer.classList.add('none')
    coffee.classList.remove('active')
    tea.classList.add('active')
    dessert.classList.remove('active')

})
dessert.addEventListener('click', ()=>{
    coffeeContainer.classList.add('none')
    teaContainer.classList.add('none')
    dessertContainer.classList.remove('none')
    coffee.classList.remove('active')
    tea.classList.remove('active')
    dessert.classList.add('active')

})

coffee.addEventListener('click', ()=>{
  coffeeContainer.classList.remove('none')
  teaContainer.classList.add('none')
  dessertContainer.classList.add('none')
  coffee.classList.add('active')
  tea.classList.remove('active')
  dessert.classList.remove('active')
})


////////////////////////////Order-Cards////////////////////////////////
const blackback = document.querySelector('.blackback')
const orderCards = document.querySelectorAll('.ordercard');
const teaContainers = document.querySelectorAll('.tea-container .coffee-item');
const coffeeContainers = document.querySelectorAll('.coffee-container .coffee-item');
const dessertContainers = document.querySelectorAll('.dessert-container .coffee-item');
const mocalContainer = document.getElementById('moda-container')


function hideAllOrderCards() {
    orderCards.forEach((orderCard) => {
        orderCard.style.display = 'none';
    });
}

coffeeContainers.forEach((coffeeContainer, index) => {
    coffeeContainer.addEventListener('click', () => {
        hideAllOrderCards();
        orderCards[index].style.display = 'flex';
        blackback.style.display = 'block'
        document.body.style.overflow = 'hidden'
    });
});

teaContainers.forEach((teaContainer, index) => {
    teaContainer.addEventListener('click', () => {
        hideAllOrderCards();
        orderCards[index + coffeeContainers.length].style.display = 'flex';
        blackback.style.display = 'block'
        document.body.style.overflow = 'hidden'
    });
});

dessertContainers.forEach((dessertContainer, index) => {
    dessertContainer.addEventListener('click', () => {
        hideAllOrderCards();
        orderCards[index + coffeeContainers.length + teaContainers.length].style.display = 'flex';
        blackback.style.display = 'block'
        document.body.style.overflow = 'hidden'
    });
});

orderCards.forEach((orderCard) => {
    const closeButton = orderCard.querySelector('.order-button-close');
    closeButton.addEventListener('click', () => {
        orderCard.style.display = 'none';
        blackback.style.display = 'none'
        document.body.style.overflow = 'auto'
    });
});

blackback.addEventListener('click', () => {
    hideAllOrderCards();
    blackback.style.display = 'none';
    document.body.style.overflow = 'auto'
});

////////////////////////////Order-Cards - Detailed////////////////////////////////

  document.addEventListener("DOMContentLoaded", function() {

    let initialPrices = {
      "irishCoffee": 7.00,
      "kahluaCoffee": 7.00,
      "honeyRaf": 5.50,
      "iceCappuccino": 5.00,
      "espresso": 4.50,
      "latte": 5.50,
      "latteMacchiato": 5.50,
      "coffeeWithCognac": 6.50,
      "moroccan": 4.50,
      "ginger": 5.00,
      "cranberry": 5.00,
      "seaBuckthorn": 5.50,
      "marbleCheesecake": 3.50,
      "redVelvet": 4.00,
      "cheesecakes": 4.50,
      "cremeBrulee": 4.00,
      "pancakes": 4.50,
      "honeyCake": 4.50,
      "chocolateCake": 4.40,
      "blackForest": 6.50
    };

    let selectedSizes = {};

    updatePrice("irishCoffee", "S");

    let sizeButtons = document.querySelectorAll(".order-size-btn");
    sizeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        let cardId = button.closest(".ordercard").id;
        let selectedSize = button.querySelector(".order-size-btn-icon").textContent;
        selectedSizes[cardId] = selectedSize;
        updatePrice(cardId, selectedSize);
        toggleSize(button);
      });
    });

    let additivesButtons = document.querySelectorAll(".order-additives-btn");
    additivesButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        let cardId = button.closest(".ordercard").id;
        toggleAdditive(button);
        updatePrice(cardId, selectedSizes[cardId]);
      });
    });

    function updatePrice(cardId, selectedSize) {
      let initialPrice = initialPrices[cardId];
      let currentPrice = initialPrice;

      let activeAdditives = document.querySelectorAll("#" + cardId + " .order-additives-btn.active");
      let additivesCount = activeAdditives.length;

      let additivesCost = additivesCount * 0.5;

      if (selectedSize === "M") {
        currentPrice += 0.50;
      } else if (selectedSize === "L") {
        currentPrice += 1.00;
      }

      currentPrice += additivesCost;

      document.querySelector("#" + cardId + " .total-price").textContent = "$" + currentPrice.toFixed(2);
    }

    function toggleAdditive(button) {
      button.classList.toggle("active");
    }

    function toggleSize(button) {
      sizeButtons.forEach(function (sizeButton) {
        sizeButton.classList.remove("active");
      });
      button.classList.add("active");
    }
  });

////////////////////////////Refrsh-button////////////////////////////////

  function showHiddenCards() {
    const hiddenCards = document.querySelectorAll('.coffee-item:nth-child(n+5)');
    const refreshButton = document.querySelector('.refresh-button');
    hiddenCards.forEach(card => {
      card.style.display = 'block';
    refreshButton.style.display = 'none'
    });
  }
