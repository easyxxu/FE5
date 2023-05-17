import { useContext } from "react";
import HelloLicatTwo from "./Components/useContext/HelloLicatTwo";
import UserInfo from "./Components/useContext/context";
const App2 = () => {
  return (
    <>
      <p>hello</p>
      <HelloLicat />
    </>
  );
};
const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <>
      <span>
        {name} is {id}
      </span>
      <HelloLicatTwo />
    </>
  );
};
export default App2;
