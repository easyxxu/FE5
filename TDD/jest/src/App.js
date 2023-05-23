import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const newColor = btnColor === "red" ? "blue" : "red";
  return (
    <button
      style={{ backgroundColor: btnColor }}
      onClick={() => setBtnColor(newColor)}
    >
      change to {newColor}
    </button>
  );
}

export default App;
