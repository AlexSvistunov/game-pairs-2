const cardsItems = [
  {
    number: 2,
    isOpen: false,
    isSuccess: false,
    id: 0,
  },
  {
    number: 1,
    isOpen: false,
    isSuccess: false,
    id: 1,
  },
  {
    number: 2,
    isOpen: false,
    isSuccess: false,
    id: 2,
  },
  {
    number: 1,
    isOpen: false,
    isSuccess: false,
    id: 3,
  },

  {
    number: 3,
    isOpen: false,
    isSuccess: false,
    id: 4,
  },

  {
    number: 3,
    isOpen: false,
    isSuccess: false,
    id: 5,
  },


];

const $cards = document.querySelector('.cards')


const generateCards = () => {

  cardsItems.forEach((cardItem, index) => {

    const $item = document.createElement('div')
    $cards.appendChild($item)
    $item.textContent = 'CARD'


    $item.addEventListener('click', () => {
      $item.classList.add('card--opened')
      if(!$item.classList.contains('card--success')) {
        cardItem.isOpen = true
      }
      console.log(cardsItems);
      const opened = iterateThrough().amountOfOpened
      if(opened === 2) {
        const allOpened = iterateThrough().allOpened
        if(allOpened[0].number === allOpened[1].number) {
          cardsItems[allOpened[0].id].isOpen = false
          cardsItems[allOpened[0].id].isSuccess = true

          cardsItems[allOpened[1].id].isOpen = false
          cardsItems[allOpened[1].id].isSuccess = true

          console.log(cardsItems);

          setTimeout(() => {
            iterateThrough()
          }, 300)
        }

        else if(allOpened[0].number !== allOpened[1].number) {
          cardsItems[allOpened[0].id].isOpen = false
          cardsItems[allOpened[1].id].isOpen = false

          console.log(cardsItems);

          setTimeout(() => {
            iterateThrough()
          }, 300)
        }
      }
 
    }) 
  })

}

const checkIfOpenedCards = (item) => {
  return item.isOpen
}

const checkForMatch = () => {

}

const iterateThrough = () => {
  let amountOfOpened = 0
  let allOpened = []
  cardsItems.forEach((cardItem, index) => {

    const isClass = cardItem.isOpen ? 'card--opened' : cardItem.isSuccess ? 'card--success' : 'card'

    const isContent =  cardItem.isOpen || cardItem.isSuccess ? cardItem.number : 'CARD'
    const $cardItems = $cards.querySelectorAll('div')
    const $cardItem = $cardItems[index]
    

    $cardItem.classList = isClass
    $cardItem.textContent = isContent

    if(cardItem.isOpen) {
      amountOfOpened++
    }

   cardItem.isOpen ? allOpened.push(cardItem) : null

  })

 
  return {
    amountOfOpened,
    allOpened
  }
}


generateCards()

// if(cardItem.classList.contains('card--opened')) {
//   cardItem.classList.remove('card--opened')
// }

// if(cardItem.classList.contains('card--success')) {
//   cardItem.classList.remove('card--success')
// }




 



