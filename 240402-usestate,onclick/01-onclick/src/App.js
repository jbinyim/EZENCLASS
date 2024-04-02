import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

const ChildCompo = () => {
  return <div>child component</div>;
};

function App() {
  const BodyProps = {
    name: "David",
    location: "서울시",
    favorList: ["파스타", "햄버거", "떡볶이"],
  };

  return (
    <div className="App">
      <Header></Header>
      <Body {...BodyProps} />
      <Buttons />
      <Footer>
        <ChildCompo />
      </Footer>
    </div>
  );
}

export default App;
