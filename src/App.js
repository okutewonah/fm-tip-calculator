import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [billResult, setBillResult] = useState(null);

  const handleResultCalculated = (result) => {
    setBillResult(result);
  };

  const handleReset = () => {
    setBillResult(null);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Bill onResultCalculated={handleResultCalculated} />
        <Result billResult={billResult} onReset={handleReset} />
      </main>
    </div>
  );
}

export default App;
