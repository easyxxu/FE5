import { createContext } from "react";

function UserInfo() {
  createContext({ name: "gary", id: "garyIsFree" });
}
export default UserInfo;
