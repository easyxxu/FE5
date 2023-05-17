import { UserInfo } from "../../App";
export default function HelloLicat() {
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
