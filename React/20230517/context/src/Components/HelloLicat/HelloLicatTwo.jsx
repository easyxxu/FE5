import { UserInfo } from "../../App";

export default function HelloLicatTwo() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>{value.id}</h2>
            <strong>{value.name}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
}
