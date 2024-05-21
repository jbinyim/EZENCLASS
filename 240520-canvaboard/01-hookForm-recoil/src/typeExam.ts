// // ts 기본개념

// // 1) 타입별칭 => 변수를 생성하듯이 간편하게 사용하고자 할떄 쓴다
// // 함수 혹은 객체 등의 요소를 생성할 떄 시그니쳐 형식으로 타입을 정의하고자 할 떄 간단하게 생성

// type User = {
//   id: number;
//   name: string;
//   nickname: string;
//   birth: string;
//   bio: string;
//   location: string;
// };

// const user: User = {
//   id: 1,
//   name: "박세진",
//   nickname: "davivd",
//   birth: "0000.00.00",
//   bio: "안녕하세요",
//   location: "서울시",
// };
// const user1: User = {
//   id: 2,
//   name: "짱구",
//   nickname: "Chang",
//   birth: "0000.00.00",
//   bio: "안녕하세요",
//   location: "부천시",
// };

// // 타입별칭 사용의 원래 목적
// // 최초로 정의한 객체의 모습
// type ICountryCode = {
//   // korea: string;
//   // UnitedState: string;
//   // Brazil: string;
//   [key: string]: string;
// };
// const CountryCode = {
//   korea: "ko",
//   UnitedState: "us",
//   Brazil: "ba",
// };

// // type 별칭 vs interface
// // 1) interface 상속 : extends
// // => 객체지정언어: class
// // 2) type별칭 : 유니온 타입을 활용해서 커스텀 타입을 생성

// // type 호환성

// interface Animal {
//   name: string;
//   color: string;
// }

// interface Dog {
//   name: string;
//   color: string;
//   breed: string;
// }

// let animal: Animal = {
//   name: "기린",
//   color: "yellow",
// };

// let dog: Dog = {
//   name: "뽀삐",
//   color: "brown",
//   breed: "진도",
// };

// // 얼핏보면 dog > animal 객체 혼은 인터페이스 타입보다 더 많은 결과값을 가지고 있기 때문에 슈퍼 타입? => X
// // 슈퍼타입 -> 많은 값을 가지고 있다는 의미X

// // 1)타입 별칭
// // 2) 타입호환
// // 3) 초과프로퍼티 검사 : 변수안에 담긴 어떤 값 => 자바스크립트라는 프로그래밍 언어는 변수안에 어떤 값이 담겨있으면 그 값을 꺼내서 검사

// interface Book {
//   name: string;
//   price: number;
// }

// interface ProgammingBook {
//   name: string;
//   price: number;
//   skill: string;
// }

// let programmingBook = {
//   name: "javascript",
//   price: 33000,
//   skill: "react",
// };

// let book2: Book = programmingBook;

// let book = programmingBook;

// const func = (book: Book) => {};

// func(programmingBook);

// // 1)타입 별칭
// // 2) 타입호환
// // 3) 초과프로퍼티 검사 : 변수안에 담긴 어떤 값 => 자바스크립트라는 프로그래밍 언어는 변수안에 어떤 값이 담겨있으면 그 값을 꺼내서 검사
// // 4) 대수타입 (* 여러개의 타입을 합성해서 만드느 타입)
// // - 유니온타입: 합집합
// // - Intersaction 타입 : 교집합
// // 5) 타입단언 (*단언 : 약속)
// // - useState("") => 버튼 / 이벤트 행위
// // 리터럴 형식의 문자로 타입 바뀜
// // [] => 약속 => 내부에 객체가 들어갈 배열의 타입으로 바뀔거야

// // 반환갓ㅂ : 타입 => void
// // 고차함수 : type별칭을 활용해서 타입시그니쳐
// // 함수타입 : 매게변수로 들어와야하는 타입 불분명 : <> 타입
// // 아직 결정되지 않았지만 앞으로 이러한ㅌ 타입이 될거야 => as 타입 단언

// let a: number | string | boolean = 1;

// a = "hello";
// a = true;

// let arr: (number | string | boolean)[] = [1, "hello", true];

// // interface의 경우는 하나의 프로젝트 파일 내 동일한 이름을 갖고있는 타입정의가 있더라도 충돌되지 않는다
// // type별칭의 경우는 동일한 네임에 사용된 겨우라면 재상요이 불가

// const test = () => {
//   type Dog = {
//     name: string;
//     color: string;
//   };
// };

// type Dog01 = {
//   name?: string;
//   color: string;
// };

// type Person01 = {
//   name: string;
//   language: string;
// };

// type Union1 = Dog01 | Person01;

// let union1: Union1 = {
//   name: "",
//   color: "",
// };

// let union2: Union1 = {
//   name: "",
//   language: "",
// };

// let unoion3: Union1 = {
//   name: "",
//   color: "",
//   language: "",
// };

// // let union4: Union1 = {
// //   name: "",
// // };

// type Intersaction = Dog01 & Person01;

// let union5: Intersaction = {
//   name: "",
//   color: "",
//   language: "",
// };

// // 타입단언 사용하기 위해서는 다음과 같은 조건
// // value as type define
// // value & type => 슈퍼 및 서브타입 구조를 띄고있어야함

// let num4 = 10 as never;
// let num5 = 10 as unknown;
// // let num6 = 10 as string;

// event가 발생하면, target도 존재하고 currentTarget
// currentTarget : event 핸들러가 바인딩되어 있는 value값을 찾아오고자 할 떄
// target : 실제 event가 발생된 요소의 value값을 찾아오고자 할 떄
// React.js에서는 currentTarget을 사용해서 value값을 찾을떄에는 Formevent
// target을 사용해서 value값을 찾고자 할 때에는 changeEvent

// <input
// {...register(`email`, {
//   required: "Email is required",
//   pattern: {
//     value: /^[A-Za-z0-9]+@naver.com/gm,
//     message: "Only naver.com emails allowed",
//   },
// })}
// type="email"
// placeholder="email"
// />
// <span>{errors.email?.message as string}</span>
// <input
// {...register(`firstname`, {
//   required: "write here",
//   validate: (value) => value.includes("test"),
// })}
// type="text"
// placeholder="firstname"
// />
// <span>{errors.firstname?.message as string}</span>
// <input
// {...register(`lastname`, { required: "write here" })}
// type="text"
// placeholder="lastname"
// />
// <span>{errors.lastname?.message as string}</span>
// <input
// {...register(`username`, { required: "write here", minLength: 10 })}
// type="text"
// placeholder="username"
// />
// <span>{errors.username?.message as string}</span>
// <input
// {...register(`password`, {
//   required: "your ps is too short",
//   minLength: {
//     value: 5,
//     message: "your ps is too short",
//   },
// })}
// type="password"
// placeholder="Wpassword"
// />
// <span>{errors.password?.message as string}</span>
// <input
// {...register(`password1`, {
//   required: "password is required",
//   minLength: {
//     value: 5,
//     message: "password is required",
//   },
// })}
// type="password"
// placeholder="password1"
// />
// <span>{errors.password1?.message as string}</span>
