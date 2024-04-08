import "./App.css";
import Show from "./components/Show";
import { useState } from "react";

const choice = {
  scissors: {
    name: "scissors",
    img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png",
  },
  rock: {
    name: "rock",
    img: "https://cdn-icons-png.flaticon.com/512/5773/5773204.png",
  },
  paper: {
    name: "paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [comSelect, setComSelect] = useState("");
  const [result, setResult] = useState("");

  const randomChoice = () => {
    const itemArr = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArr.length);
    const fianl = itemArr[randomItem];
    return choice[fianl];
  };

  const judgement = (user, com) => {
    if (user.name === com.name) {
      return "tie";
    } else if (user.name === "scissors") {
      return com.name === "paper" ? "win" : "lose";
    } else if (user.name === "rock") {
      return com.name === "scissors" ? "win" : "lose";
    } else if (user.name === "paper") {
      return com.name === "rock" ? "win" : "lose";
    }
  };

  const play = (item) => {
    setUserSelect(choice[item]);
    const comChoice = randomChoice();
    setComSelect(comChoice);
    setResult(judgement(choice[item], comChoice));
  };
  return (
    <div className="container">
      <div className="show">
        <Show title="You" item={userSelect} result={result} />
        <Show title="Com" item={comSelect} result={result} />
      </div>
      <div className="buttons">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
