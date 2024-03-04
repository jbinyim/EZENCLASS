// 정규표현식 => Regular Expression
// 왜 사용하는가? 어떤 특정 패턴을 정의하고자 할 떄
// 그리고 그 패턴의 결과값을 도출하고자 할 떄
// 구성 =>  패턴(플레그)
// 패턴 => 알파벳 3개로 구성된 문자열
// 플레그(+옵션) => 대문자, 소문자, 대소문자

// let regexp = /\d{3}/;
// let regexp = new RegExp(/\d{3}/);
// console.log(regexp.test("123"));
// console.log(regexp.test("hello"));

// 정규표현식은 대 소문자를 가린다

// let str = "ES2024 is powerfull";
// console.log(str.match(/ES6/));
// str.replace(/ES2024/, "ES6");
// console.log(/es/.test(str));
// console.log(/es/i.test(str));

// console.log(str.match(/ES\d\d\d\d/));

// let hello = "Hello, everyone";
// console.log(/^h/i.test(hello));
// console.log(/one$/.test(hello));

// let testStr = "ES2024";
// console.log(testStr.match(/[0-9]/g));

// let str = "Oooops";
// console.log(str.match(/o{2}/));
// console.log(str.match(/o{2,}/));
// console.log(str.match(/o{2,4}/i));

// 자주사용하는 정규표현식

// 숫자만 찾아오고자 할 떄
/^[0-9]+$/;

// 양의 정수값만 찾아오고자 할 때
/^[1-9]\d*$/;

// 음의 정수값만 찾아오고자 할 떄
/^\-[1-9]\d*$/;

// 숫자와 영문자만 찾아오고자 할 때
/^[a-zA-Z0-9]+$/;
