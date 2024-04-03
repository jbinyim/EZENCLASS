import "./App.css";
import { useState } from "react";
import Viewer02 from "./components/Viewer02";
import Controler from "./components/Controler";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (num) => {
    setCount(count + num);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer02 count={count} />
      </section>
      <section>
        <Controler handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
