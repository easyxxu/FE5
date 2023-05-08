import FeelingListItem from "../FeelingListItem/FeelingListItem";
import "./FeelingList.css";

export default function FeelingList(props) {
  const feelingList = ["bad 😠", "soso 😐", "good 😀", "so good 😆"];

  return (
    <ul>
      {feelingList.map((item) => {
        // feeling : 기분의 텍스트, isSelected : 현재 사용자의 기분이 맞는지 전달, props.onItemClick : 현재 기분을 변경하는 함수
        return (
          <FeelingListItem
            feeling={item}
            onClickEvt={props.onItemClick}
            isSelected={props.feeling === item}
          />
        );
      })}
    </ul>
  );
}
