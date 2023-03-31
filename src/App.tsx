import { AppContainer } from "./App.styles";
import { getAllCards, selectCards } from "./redux/cards/slice";
import { useAppSelector, useAppDispatch } from "./redux/hooks";

function App() {
  const { cards } = useAppSelector(selectCards);
  const dispatch = useAppDispatch();

  return (
    <AppContainer>
      <div className="card-container">
        <img className="card" src={""} alt="" />
        <div className="buttons-container">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
        <h1>{cards}</h1>
      </div>
    </AppContainer>
  );
}

export default App;
