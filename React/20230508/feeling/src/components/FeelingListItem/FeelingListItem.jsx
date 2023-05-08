import "./FeelingListItem.css";

export default function FeelingListItem(props) {
  const onItemClick = () => {
    props.onClickEvt(props.feeling); // props의 feeling을 인자로 전달
  };

  const getBgColor = () => {
    if (props.isSelected) {
      return "skyblue";
    }
  };
  return (
    <li>
      <button
        className="btn-feeling"
        onClick={onItemClick}
        style={{ background: getBgColor() }}
      >
        My feeling is {props.feeling}
      </button>
    </li>
  );
}
