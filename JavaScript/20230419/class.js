class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}
const robot1 = new Robot(); // 인스턴스 생성

// 생성자 함수 -> class
function Jisu() {
  (this.name = "jisu"), (this.age = 25), (this.gender = "woman");
}
Jisu.prototype.workout = function (exercise) {
  console.log(`열심히 먹은자 오늘도 뛰어라! 오늘은 ${exercise} 하는 날`);
};

class Jisu {
  constructor(name) {
    this.name = name;
  }
  workout() {
    console.log(`제 이름은 ${this.name}입니다.`);
  }
}
const jisu = new Jisu("jisu");

// 상속받기
class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}
class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = "아이크";
  }
  sayBabyName() {
    // 상속을 받게 되면 부모 클래서의 메소드를 사용할 수 있음-> this로 접근 가능
    this.sayYourName();
    console.log("suceeding you, father!");
  }
}
const baby = new BabyRobot("bob");

// 실습 : 소시지를 만드는 클래스
// 1. 생성자 함수는 두 가지 매개변수를 전달받을 수 있으며 전달되는 매개변수에 따라 소시지의 맛이 결정됨
// 2. 소시지 객체는 taste라는 메서드 존재. 생성자함수에서 전달받은 재료에 따라 맛을 나타내는 콘솔로그를 출력하는 역할을 함2. (예시 : ‘소고기’ 와 ‘파’ 를 매개변수로 전달하였을 경우, ‘소고기와 파 맛이 난다!’ 는 콘솔 메세지를 출력합니다.)
//3. 소시지 클래스를 상속받는 FiresSausage 파생클래스를 생성해봅니다. 파생클래스의 taste 메서드를 실행하면 콘솔 메세지에 불맛이 나기 시작합니다.

class MakingSausage {
  constructor(ingredient1, ingredient2) {
    this.ingredient1 = ingredient1;
    this.ingredient2 = ingredient2;
  }
  taste() {
    console.log(`${this.ingredient1}와 ${this.ingredient2} 맛이 난다!`);
  }
}

class FiresSausage extends MakingSausage {
  constructor(ingredient1, ingredient2) {
    super(ingredient1, ingredient2);
  }
  tasteFire() {
    this.taste();
    console.log("소시지에 불맛 추가!!");
  }
}

const sausage = new FiresSausage("소고기", "파");
