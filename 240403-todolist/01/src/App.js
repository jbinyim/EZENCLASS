import "./App.css";
import Viewer from "./components/Viewer";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const onDecrease = () => {
    setNum(num - 1);
  };
  const onIncrease = () => {
    setNum(num + 1);
  };
  return (
    <div className="App">
      <h2>{num}</h2>
      <Viewer number={num} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default App;
