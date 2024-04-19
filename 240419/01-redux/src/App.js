import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const dispatch = useDispatch();
  const increase = () => {
    dispatch({
      type: "INCREMENT",
      payload: {
        num: 5,
      },
    });
  };
  const decrease = () => {
    dispatch({
      type: "DECREASE",
      payload: {
        mnum: -5,
      },
    });
  };

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        id: "jbinyim",
        pw: "1234",
      },
    });
  };

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <Box />
      <button onClick={login}>로그인</button>
      <h1>
        {id} {pw}
      </h1>
    </div>
  );
}

export default App;
