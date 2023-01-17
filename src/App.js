import logo from "./logo.svg";
import "./App.css";

function PortfolioPage() {
  return (
    <>
      <Title title="PortfolioPage" />
    </>
  );
}

function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <PortfolioPage />
    </div>
  );
}

export default App;
