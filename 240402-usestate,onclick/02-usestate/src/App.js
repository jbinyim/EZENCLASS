import "./App.css";
import { useState } from "react";

function App() {
  // console.log("update");
  // const [count, setCount] = useState(0);
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };
  // const [text, setText] = useState("");
  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };
  // const [date, setDate] = useState("");
  // const handleOnChange = (e) => {
  //   setDate(e.target.value);
  // };
  // const [option, setOption] = useState("");
  // const handleOnChange = (e) => {
  //   setOption(e.target.value);
  // };
  // const [textarea, setTextarea] = useState("");
  // const handleOnChange = (e) => {
  //   setTextarea(e.target.value);
  // };
  // const [text, setText] = useState("");
  // const [option, setOption] = useState("");
  // const [date, setdate] = useState("");
  // const [textarea, setTextarea] = useState("");

  // const handleOnChangeName = (e) => {
  //   setText(e.target.value);
  // };
  // const handleOnChangeSelect = (e) => {
  //   setOption(e.target.value);
  // };
  // const handleOnChangeBirth = (e) => {
  //   setdate(e.target.value);
  // };
  // const handleOnChangeTextarea = (e) => {
  //   setTextarea(e.target.value);
  // };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      {/* <h2>{count}</h2>
      <button onClick={onIncrease}>+</button> */}
      {/* <input value={text} onChange={handleOnChange}></input>
      <div>{text}</div> */}
      {/* <input value={date} type="date" onChange={handleOnChange} /> */}
      {/* <select value={option} onChange={handleOnChange}>
        <option key={"짬뽕"}>짬뽕</option>
        <option key={"분식"}>분식</option>
        <option key={"국밥"}>국밥</option>
      </select> */}
      {/* <textarea value={textarea} onChange={handleOnChange}></textarea> */}
      <div>
        <input
          name="name"
          value={state.name}
          placeholder="이름"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"여성"}>여성</option>
          <option key={"남성"}>남성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleOnChange}
        ></input>
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default App;
