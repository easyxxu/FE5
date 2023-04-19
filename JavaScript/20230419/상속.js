const obj = {
  name: "test",
};

console.log(obj.hasOwnProperty("name"));

const arr = [1, 2, 3];

console.log(arr.hasOwnProperty("name"));

// 부모의 역할을 할 생성자 함수
function Parent() {
  this.name = "재현";
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};

// 자식 역할의 생성자
function Child() {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
  console.log("now i can walk!!");
};
