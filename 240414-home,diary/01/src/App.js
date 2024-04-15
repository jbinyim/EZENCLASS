import "./App.css";

function Header() {
  return (
    <h1>
      <a href="/">web</a>
    </h1>
  );
}

function Nav({ topics }) {
  const lis = [];
  for (let i = 0; i < topics.length; i++) {
    lis.push(
      <li key={topics[i].id}>
        <a href={`/read/` + topics[i].id}>{topics[i].title}</a>
      </li>
    );
  }
  return <ol>{lis}</ol>;
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];
  return (
    <div className="App">
      <Header />
      <Nav topics={topics} />
    </div>
  );
}

export default App;
