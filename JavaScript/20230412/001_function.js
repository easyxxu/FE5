// 1. 객체처럼 사용되는 함수의 특성
function 함수(a, b) {
  return a + b;
}
function 함수2(a, b, c) {
  return a + b;
}
function 함수3(a, b, c, d, e) {
  return a + b;
}
console.dir(함수);
console.dir(함수2);
console.dir(함수3);
//함수의 length는 파라미터의 수

//array, object, function가 모두 같은 방식으로 접근하거나 값을 변경할 수 있다
함수["location"] = "jeju";
console.dir(함수);

함수["name"] = "jejufunc"; // 함수의 이름은 변경 불가능
console.dir(함수); //console.dir(jejufunc) 호출 불가능

함수["length"] = 5; //length는 변경 불가능
console.dir(함수);

// 2. 아규먼트가 순서대로 들어가는 함수의 특성
function 함수(a = 10, b = 20, c = 30) {
  console.log(a, b, c);
  return a + b + c;
}
함수();
함수(100);
함수(100, 200);
함수(100, 200, 300);
함수((c = 300)); //330 아니고 350임. 순서대로 들어감 (300 + 20 + 30)
함수((a = 100), (c = 300)); //430 (100 + 300 + 30)

// 3. roro 기법 원리 설명
/* roro 기법이란? 입력되는 아규먼트가 매우 많은 아래의 함수의 경우 호출하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어려움*/
window.addNewControl("Title", 20, 30, 10, 100, true);
// 코드를 읽어 내려가다가 위의 함수를 만났다면 기분이 어떨까요?? (저렇게 함수명을 짜면 힘듬)
// python 형식
window.addNewControl(
  title = "Title",
  xPosition = 20,
  yPosition = 50,
  width = 100,
  height = 50,
  drawingNow = true
);
//roro 기법을 모든 함수에서 사용하나요?
function sum(a, b) {}

//어떻게 사용하고 원리는 무엇일까요?
function loginInfo({
  userLevel = "Gold",
  writing = true,
  reading = true,
  channel = true,
  backup = "1week",
  socialLogin = true,
}) {
  console.log("...function...");
  console.log(userLevel, writing, reading, channel, backup, socialLogin);
}

loginInfo({
  userLevel: "Silver",
  socialLogin: false,
  backup: "3 days", // 중간에 생략된 값도 있고 순서까지 뒤바뀜
});

//원리 (몰라도 상관없음)
let one;
let two;
let three;

let four = {
  one,
  two,
  three,
};
// {one: undefined, two: undefined, three: undefined}
// 이렇게 사용할 수 있게 된 것은 최근
// '이렇게'는 변수 값을 객체 안에 넣으면 변수명이 key가 되고 변수의 값이 object의 value가 되는 문법

let { one, two, three } = { one: 10, two: 20, three: 30 };
let { one, two, three } = { two: 10, one: 20, three: 30 };
// 왼쪽에서 one과 two, three는 변수(obejct의 key와 value가 아님)

let {one: 10, two, three} = {two:20, one: 10, three:30} //error
let {one = 100, two, three} = {two:20, three:30}

//살짝 심화
//위 코드에서 loginInfo({}) 호출했을 때는 에러가 안나지만 loginInfo() 호출했을 때는 에러가 발생
function 함수({
    a = 2, b= 1, c=3
} = {}){
    console.log(a,b,c)
    return a+b+c
}

함수()
함수({})
함수({b: 100})
// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined