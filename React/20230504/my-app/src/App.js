import "./App.css";
// import Menu from "./components/Menu/Menu";
// import NewMenu from "./components/newMenu/NewMenu";
import Clock from "./components/clock/Clock";
import Area from "./components/area/Area";
function App() {
  return (
    <div className="container">
      <h1>Today</h1>
      <Clock />
      <Area />
    </div>
  );
}

export default App;
