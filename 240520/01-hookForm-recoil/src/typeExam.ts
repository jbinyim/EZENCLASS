// ts 기본개념

// 1) 타입별칭 => 변수를 생성하듯이 간편하게 사용하고자 할떄 쓴다
// 함수 혹은 객체 등의 요소를 생성할 떄 시그니쳐 형식으로 타입을 정의하고자 할 떄 간단하게 생성

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

const user: User = {
  id: 1,
  name: "박세진",
  nickname: "davivd",
  birth: "0000.00.00",
  bio: "안녕하세요",
  location: "서울시",
};
const user1: User = {
  id: 2,
  name: "짱구",
  nickname: "Chang",
  birth: "0000.00.00",
  bio: "안녕하세요",
  location: "부천시",
};

// 타입별칭 사용의 원래 목적
// 최초로 정의한 객체의 모습
type ICountryCode = {
  // korea: string;
  // UnitedState: string;
  // Brazil: string;
  [key: string]: string;
};
const CountryCode = {
  korea: "ko",
  UnitedState: "us",
  Brazil: "ba",
};
