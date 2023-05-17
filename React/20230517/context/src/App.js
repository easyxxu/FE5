import { createContext } from "react";
import HelloLicat from "./Components/HelloLicat/HelloLicat";
import HelloLicatTwo from "./Components/HelloLicat/HelloLicatTwo";

const UserInfo = createContext();
const App = () => {
  return (
    <>
      <UserInfo.Provider value={{ name: "gary", id: "garyIsFree" }}>
        <HelloLicat />
      </UserInfo.Provider>
      <UserInfo.Provider value={{ name: "jisu", id: "hello" }}>
        <HelloLicatTwo />
      </UserInfo.Provider>
    </>
  );
};

export { App, UserInfo };
