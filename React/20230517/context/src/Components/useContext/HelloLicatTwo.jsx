import { useContext } from "react";
import UserInfo from "./context";

const HelloLicatTwo = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <span>
        {name} is {id}
      </span>
    </div>
  );
};
export default HelloLicatTwo;
