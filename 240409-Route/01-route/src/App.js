import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    emoitonId: 1,
    content: "mock1",
  },
  {
    id: "mock2",
    date: new Date().getTime() - 1,
    emoitonId: 2,
    content: "mock2",
  },
  {
    id: "mock3",
    date: new Date().getTime() - 2,
    emoitonId: 3,
    content: "mock3",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return mockData;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) => {
        return String(it.id) === String(action.data.id)
          ? { ...action.data }
          : it;
      });
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
};

export const DiaryStateContext = React.createContext();

function App() {
  const [isDataLoded, setIsDataLoded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoded(true);
  }, []);
  const onCreate = (date, emoitonId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        emoitonId,
        content,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, emoitonId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        emoitonId,
        content,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoded) {
    return <div>데이터를 불러오는 중입니다</div>;
  } else {
    return (
      <div className="App">
        <DiaryStateContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </DiaryStateContext.Provider>
      </div>
    );
  }
}

export default App;
