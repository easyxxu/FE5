let x = 0;
while (x < 10) {
  console.log(x);
  x += 1;
}
while (x < 10) {
  console.log("start");
  console.log(x);
  x += 1;
  console.log("end");
}

let input;
do {
  input = prompt("숫자 입력하세요");
} while (isNaN(input));
console.log("input number is " + input + ".");

//구구단
let i = 2;
let k = 1;
while (i < 10) {
  k = 1; //초기화를 해줘야함
  while (k < 10) {
    console.log(`${i} * ${k} = ${i * k}`);
    k++;
  } //k == 10이 되었음 => 23줄으로 가서 초기화 필요
  i++;
}

//암기 2
let s = "hello world";
let result = "";
for (let i = 0; i < s.length; i++) {
  result += s[i];
  //   result = s[i] + result;
}
console.log(result);

//뒤집기
let s1 = "hello world";
let result1 = "";
let count = 0;
while (count < s.length) {
  result = s[count] + result;
  count++;
}

console.log(result);

//암기 3 - fatorial
let cnt = 1;
for (let i = 1; i <= 10; i++) {
  cnt *= i;
}
console.log(cnt);
