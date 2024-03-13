// JS 태생적으로 동기처리 방식 지원
// 외부에서 데이터를 가져올때 비동기방식으로 처리를 해줘야만 큰 용량의 데이터를 다 가져오지 못한 상태라도 밑에 다른 작은 규모의 데이터를 가여졸 수 있는 효율성 추구

// const displayHello = () => {
//   console.log("hello");
// };
// displayHello();

// async function displayHello01() {
//   console.log("hello");
// }
// displayHello01();

// 순수 Promise 객체를 활용한 비동기 처리 실행문

// const whatYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`hello, ${subject}`));
// };

// whatYourFavorite().then(displaySubject).then(console.log);

// async 예약억를 활용해서 Promise 객체 생성 및 사용

// async function whatsYourFavorite() {
//   const fav = "javascript";
//   return fav;
// }

// async function displaySubject(subject) {
//   return `Hello, ${subject}`;
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

async function whatsYourFavorite() {
  const fav = "typescript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

whatsYourFavorite();
init();
