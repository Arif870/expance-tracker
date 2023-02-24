import "./App.css";
import { AddNewTransition } from "./components/AddNewTransition";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpence } from "./components/IncomeExpence";
import { TransitionList } from "./components/TransitionList";

function App() {
  return (
    <div className="App">
      <Header title="Expence Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpence />
        <TransitionList />
        <AddNewTransition />
      </div>
    </div>
  );
}

export default App;
