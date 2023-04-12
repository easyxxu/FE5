let book = {
  title: "JavaScript",
  price: 1000,
  author: "hojun",
  publication: "2023.04.12",
};

let newBook = {};

//form에서 입력받음
newBook["title"] = "JavaScript";
newBook["price"] = 100000;
newBook["author"] = "홍길";
newBook["publication"] = "2023.04.04";

function Book(title, price, author, publication) {
  this.title = title;
  this.price = price;
  this.author = author;
  this.publication = publication;
}
let newBook2 = Book("JavaScript", 100000, "홍길", "2023.04.04");

let newBook3 = new Book("JavaScript", 100000, "홍길", "2023.04.04");

//new 키워드를 사용하면 발생하는 일
function Book(title, price, author, publication) {
  //this = {}
  this.title = title;
  this.price = price;
  this.author = author;
  this.publication = publication;
  //return this
}
