import { useState } from "react";

import "./App.css";
import Dishes from "./Components/Dishes/Dishes";
import AllCategories from "./Components/Filter/AllCategories";
import Cart from "./Components/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container containerleft">
        <AllCategories />
        <Cart />
      </div>
      <div className="container">
        <Dishes />
      </div>
    </div>
  );
}

export default App;
