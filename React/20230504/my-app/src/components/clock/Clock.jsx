import "./Clock.css";
function Clock() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();
  let hour = date.getHours();
  let min = date.getMinutes();
  return (
    <div className="clockContainer">
      <p>
        오늘은 {year}년 {month}월 {day}일 입니다.
      </p>
      <p>
        현재 시각 {hour} : {min}
      </p>
    </div>
  );
}
export default Clock;
