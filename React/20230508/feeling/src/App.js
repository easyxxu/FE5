import FeelingList from "./components/FeelingList/FeelingList";
import MyInfo from "./components/DisplayFeeling/MyInfo";
import "./App.css";
import { useState } from "react";

function App() {
  const [feeling, setFeeling] = useState("?");

  return (
    <>
      <FeelingList feeling={feeling} onItemClick={setFeeling} />
      <MyInfo feeling={feeling} />
    </>
  );
}
export default App;
