class Employee {
  // 필드
  // protected name: string; // 자동으로 public
  // public age: number; // 자동으로 public
  // public position: string; // 자동으로 public

  // 생성자 함수
  constructor(
    public name: string,
    public age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }
  // 메서드
  work() {
    console.log("열심히 일함");
  }
}

const employA: Employee = new Employee("짱구", 22, "프론트앤드");
console.log(employA);
employA.work();

// employA.name = "피구왕통키";
employA.age = 26;
employA.position = "과장";
console.log(employA);

// 상속(extents) : 부모요소로부터 값을 발을 수 있다는 전제를 설정하는 것이지, 반드시 상속받은 값을 구현해야할 의무 X

// 실행 = implemnets : 부모로부터 받은 값은 반드시 구현해야하는 의무성

class ExecutiveOfficer extends Employee {
  // 필드값은 변함없이 그대로 상속
  // super() 사용 안해도 ㄱㅊ, 메서드만 추가
  func() {
    console.log(`${this.name}`);
    console.log(this.age);
  }
}

console.log(ExecutiveOfficer);

// Ts 접근제어자
// public : 모든 범위에서 접근할 수 있는 제어자 설정(* class를 생성 기본 세팅된 default 제어자)
// private : 클래스 내부 범위에서만 접근할 수 있는 제어자 설정
// protected : 클래스 내부 + 상속받은 파생 클래스에서만 접글할 수 있는 제어자 설정
