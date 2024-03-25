import { cardsItems  } from "./variables.js";
import { $cards } from "./variables.js";



const generateInitially = () => {
  cardsItems.forEach((cardItem, index) => {
    const $item = document.createElement("div");
    $cards.appendChild($item);
    $item.textContent = "CARD";

    $item.addEventListener("click", () => {
      onClickFunction($item, cardItem)
    });
  });
};


const onClickFunction = ($item, cardItem) => {
  $item.classList.add("card--opened");
      if (!$item.classList.contains("card--success")) {
        cardItem.isOpen = true;
      }

      const opened = iterateThrough().amountOfOpened;
      if (opened === 2) {
        const allOpened = iterateThrough().allOpened;
        if (allOpened[0].number === allOpened[1].number) {
          cardsItems[allOpened[0].id].isOpen = false;
          cardsItems[allOpened[0].id].isSuccess = true;

          cardsItems[allOpened[1].id].isOpen = false;
          cardsItems[allOpened[1].id].isSuccess = true;

          console.log(cardsItems);

          setTimeout(() => {
            iterateThrough();
          }, 300);
        } else if (allOpened[0].number !== allOpened[1].number) {
          cardsItems[allOpened[0].id].isOpen = false;
          cardsItems[allOpened[1].id].isOpen = false;

          console.log(cardsItems);

          setTimeout(() => {
            iterateThrough();
          }, 300);
        }
      }
}


const iterateThrough = () => {
  let amountOfOpened = 0;
  let allOpened = [];
  cardsItems.forEach((cardItem, index) => {
    const isClass = cardItem.isOpen
      ? "card--opened"
      : cardItem.isSuccess
      ? "card--success"
      : "card";

    const isContent =
      cardItem.isOpen || cardItem.isSuccess ? cardItem.number : "CARD";
    const $cardItems = $cards.querySelectorAll("div");
    const $cardItem = $cardItems[index];

    $cardItem.classList = isClass;
    $cardItem.textContent = isContent;

    if (cardItem.isOpen) {
      amountOfOpened++;
    }

    cardItem.isOpen ? allOpened.push(cardItem) : null;
  });

  return {
    amountOfOpened,
    allOpened,
  };
};


generateInitially();
