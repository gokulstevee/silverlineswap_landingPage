import "./App.css";

import Nav from "./components/Nav";
import Content from "./components/Content";
import BgImg from "./components/BgImg";

function App() {
  return (
    <div className="App">
      <BgImg />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
