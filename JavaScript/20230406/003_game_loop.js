//프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학수식
//랜덤 값 맞추는 게임
let answer = Math.floor(Math.random() * 100);
let count = 0;
for (;;) {
  count += 1;
  let userInput = parseInt(window.prompt("값을 입력해주세요"));
  if (answer > userInput) {
    window.alert("Up!");
  } else if (answer < userInput) {
    window.alert("Down!");
  } else if (Number.isNaN(userInput)) {
    window.alert("다시 입력하세요");
  } else {
    window.alert("correct!");
    break;
  }
}
console.log(`${count}번째 맞추셨습니다!`);
