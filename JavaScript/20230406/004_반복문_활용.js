//문제
s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1]);
}

//다음 수학 점수의 반평균 구하기
let mathTest = [10, 99, 89, 70];
let sum = 0;
for (let i of mathTest) {
  sum += i;
}
console.log(sum / mathTest.length);

//문제 : 다음 유저의 평균 구하기
let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];
let sum2 = 0;
for (let i in user) {
  sum2 += user[i].age;
  //sum2 += user[i]['age']
}
console.log(sum2 / user.length);

////
!true == false;

///외우기
user.map((v) => v.age).filter((v) => !!v); // undefined값이 아닌 것만 남기기
user
  .map((v) => v.age)
  .filter((v) => !!v)
  .reduce((a, b) => a + b, 0);
