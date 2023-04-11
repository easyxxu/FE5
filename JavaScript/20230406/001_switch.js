switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}
//switch문 안쓰고 실행하는 방법(파이썬)
const day = new Date().getDay();
const dayObj = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
console.log(dayObj[day]);

//default 처리하는 방법
const day2 = new Date().getDay();
const dayObj2 = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
//Nullish 연산자 사용
console.log(dayObj2[day2] ?? "hello");
//단락평가 사용
console.log(dayObj2[day2] || "hello");
