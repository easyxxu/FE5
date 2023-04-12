let m = new Map();

// Map에 값을 넣기
m.set("one", 1);
m.set(1, "one");
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근
m.get("one");
// {[1,2,3]: 100, {'one':1}:10} //error
// m.set([1, 2, 3], "real?");
// m.get([1, 2, 3]);

let x = [1, 2, 3, 4];
m.set(x, "really?");
m.get(x);

//Map의 값이 있는지 확인
m.has("one");

//Map의 값 제거
m.delete("one");
m.has("one");
m;

//Map size
m.size;

const data = new Map().set("name", "jisu").set("age", 25).set("height", 165);

let data = new Map([
  ["one", 1],
  ["two", 2],
]); // o
let data = new Map(Object.entries({ one: 1, two: 2 })); //o

// 직접 순회가 가능하지 않은 Object!
let data = { one: 1, two: 2 };
for (const i of data) {
  // X 작동되지 않습니다!
  console.log(i);
}

let data = { one: 1, two: 2 };
for (const i of Object.entries(data)) {
  console.log(i);
}

// 직접 순회가 가능한 Map!
let m = new Map();

m.set("하나", 1) // 메서드 체이닝
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4);

for (const i of m) {
  console.log(i);
}
for (const [key, value] of m) {
  console.log(i);
}

let test = { one: 1, two: 2 };
Object.keys(); //object에서 값을 뽑아내기

//Map은 메서드로 모두 호출 가능
m.keys();
m.values();
m.entries();

//Map <-> Object 형변환
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));
let 오브젝트 = Object.fromEntries(맵);
