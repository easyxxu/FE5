import React from "react";
const UserInfo = createContext({ name: "gary", id: "garyIsFree" });
export default function AppConsumer() {
  return <HelloLicat />;
}
