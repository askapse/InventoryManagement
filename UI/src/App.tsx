import { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import { Input, InputWithLabel } from "./components/Input";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Login />
      </div>
    </>
  );
}

export default App;
