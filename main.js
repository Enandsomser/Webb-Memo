const cardContainer = document.querySelector(".memo-cards")
const memoObj = ["aqua", "crimson", "green"]
const memoObjsPicklist = [...memoObj, ...memoObj]
const cardCount = memoObjsPicklist.length

// Game state

let revealCount = 0
let activeCard = null
let awaitingEndOfMove = false

function buildCard(memoObj) {
  const element = document.createElement("div")

  element.classList.add("card")
  element.setAttribute("data-memoObj", memoObj);
  element.setAttribute("data-revealed", "false")

  element.addEventListener("click", () => {
    const revealed = element.getAttribute("data-revealed");


    if (awaitingEndOfMove || revealed === "true" || element === activeCard) return;

    element.style.backgroundColor = memoObj;

    if (!activeCard) {
      activeCard = element;

      return;
    }

    const cardToMatch = activeCard.getAttribute("data-memoObj");

    if (cardToMatch === memoObj) {
      activeCard.setAttribute("data-revealed", "true")
      element.setAttribute("data-revealed", "true")
      awaitingEndOfMove = false
      activeCard = null
      revealCount += 2
        if (revealCount === cardCount) alert("Vinsten är din. Refresha för att spela igen.") 
        return;
    }


    awaitingEndOfMove = true;

    setTimeout(() => {
      element.style.backgroundColor = null;
      activeCard.style.backgroundColor = null;

      awaitingEndOfMove = false;
      activeCard = null;

    }, 1000);

  })

  return element;

}

// Randomize
for (let i = 0; i < cardCount; i++) {
  const randomIndex = Math.floor(Math.random() * memoObjsPicklist.length)
  const memoObj = memoObjsPicklist[randomIndex]
  const card = buildCard(memoObj)

  memoObjsPicklist.splice(randomIndex, 1)
  cardContainer.appendChild(card) 
}


