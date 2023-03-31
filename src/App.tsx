import { useEffect } from "react";
import { AppContainer } from "./App.styles";
import { addToDeck, fetchCards, nextCard, previousCard, removeFromDeck, selectCards } from "./redux/cards/slice";
import { useAppSelector, useAppDispatch } from "./redux/hooks";

import closeImg from "./assets/close.png";

function App() {
  const { cards, deck, showCard } = useAppSelector(selectCards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards());
    console.log(cards);
    console.log(showCard);
  }, []);

  const handleExpandSidenav = () => {
    document.querySelector(".sidenav")?.classList.toggle("expanded");
  };

  return (
    <AppContainer>
      <div className="card-container">
        <img
          className="card"
          src={
            showCard.card_images
              ? showCard.card_images[0].image_url
              : ""
          }
          alt=""
        />
        <div className="buttons-container">
          <button onClick={() => dispatch(previousCard())}>{"<"}</button>
          <button onClick={() => dispatch(addToDeck(showCard))}>
            Adicionar ao deck
          </button>
          <button onClick={() => dispatch(nextCard())}>{">"}</button>
        </div>
      </div>
      <button onClick={handleExpandSidenav} className="my-deck">
        Meu Deck
      </button>
      <div className="sidenav">
        <h1>Meu Deck</h1>
        <img
          onClick={handleExpandSidenav}
          src={closeImg}
          className="close-icon"
          alt=""
        />
        <ul>
          <hr />
          {deck.map((card, index) => (
            <li key={index}>
              <img className="card" src={card.card_images[0].image_url} alt={card.name} />
              <div>
                <h2>{card.name}</h2>
                {/* <h3>{card.quantity}</h3> */}
                <img onClick={() => dispatch(removeFromDeck(card))} className="delete-icon" src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" alt="" />
              </div>
            </li>
          ))}
          {/* <li>
            <img
              src="https://images.ygoprodeck.com/images/cards/6983839.jpg"
              alt=""
            />
            <div>
              <h2>Nome</h2>
              <h3>x2</h3>
            </div>
          </li>
          <hr />
          <li>
            <img
              src="https://images.ygoprodeck.com/images/cards/6983839.jpg"
              alt=""
            />
            <div>
              <h2>Nome</h2>
              <h3>x2</h3>
            </div>
          </li> */}
        </ul>
      </div>
    </AppContainer>
  );
}

export default App;
