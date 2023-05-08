import "./MyInfo.css";
export default function MyInfo(props) {
  return (
    <div className="wrap-myinfo">
      <p>My feeling is {props.feeling}</p>
    </div>
  );
}
