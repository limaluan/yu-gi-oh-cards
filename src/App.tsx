import { AppContainer } from "./App.styles";

function App() {
  return (
    <AppContainer>
      <div className="card-container">
        <img className="card" src="https://images.ygoprodeck.com/images/cards/6983839.jpg" alt="" />
        <div className="buttons-container">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
