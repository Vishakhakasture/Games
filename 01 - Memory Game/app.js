document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "white",
      img: "images/white.png",
    },
    {
      name: "blank",
      img: "images/blank.png",
    },
  ];

  const grid = document.querySelector(".grid");

  // create board

  function createBoard() {
    // it will iterate over each card
    for (let i = 0; i < cardArray.length; i++) {
      // for each card create an image element
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      // card.addEventListener('click',flipcard)
      grid.appendChild(card);
    }
  }

  createBoard();
});
