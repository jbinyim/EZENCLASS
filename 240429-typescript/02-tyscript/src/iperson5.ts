// 추상 클래스를 생성 할 때에는 class 명령어 앞에 abstract
// 반드시 추상 클래스를 만들때에는 하나 이상의 abstarct 속성 혹은 메서드(함수가) 존재해야 함

abstract class AbstactPerson5 {
  abstract name: string;
  constructor(public age: number) {}
}
