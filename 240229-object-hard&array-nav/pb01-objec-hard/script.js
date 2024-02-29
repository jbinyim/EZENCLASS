// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   // this.finish = function () {
//   //   this.done === false ? (str = "reading") : (str = "finish");
//   //   return str;
//   // };
// };

// Book.prototype.finish = function () {
//   this.done === false ? (str = "reading") : (str = "finisht");
//   return str;
// };

// const book1 = new Book("자바스트립트", 648, false);
// console.log(book1.finish());

// // 생성자함수 => 프로토타입 => 인스턴스
// // Object => Book(prototype) => book1(__proto__)

// function Book(title, price) {
//   this.title = title;
//   this.price = price;
// }

// Book.prototype.buy = function () {
//   console.log(`${this.title}을 ${this.price}에 구매하였습니다`);
// };

// const book2 = new Book("abcde", 10000);
// // console.log(book2.buy());
// book2.buy();

// // 위에서 만든 생성자 함수와 비슷하면서 조금 기능이 추가된 생성자 함수를 또 만들고 싶다면?

// function Textbook(title, price, major) {
//   Book.call(this, title, price);
//   this.major = major;
// }
// Textbook.prototype.buyTextBook = function () {
//   console.log(
//     `${this.major} 전공 서적 ${this.title}을 구매했습니다 ${this.price}원 입니다.`
//   );
// };

// Object.setPrototypeOf(Textbook.prototype, Book.prototype);
// const book3 = new Textbook("tyscript", 5000, "computer");
// book3.buyTextBook();
// book3.buy();

class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매하였습니다`);
  }
}
const book1 = new BookC("javascript", 15000);
book1.buy();

class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }
  buyTextbook() {
    console.log(`${this.major} 전공서적 ${this.title}을 구매했습니다`);
  }
}

const book2 = new TextbookC("typescript", 20000, "computer");
book2.buyTextbook();
book2.buy();
