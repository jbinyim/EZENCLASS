const pure = (a: number, b: number) => {
  return a + b;
};

const impure = (array: number[]) => {
  array.push(1);
  array.splice(0, 1);
};

// 배열 내부에서 사용할 수 있는 메서들 중에서 이런 불순함으 요건에 해당되는 함수들이 꽤나 많음

// 선언형으로 배열의 주요 메서드를 사용하기 위해서 알고 있어야 하는 주요 개념 깊은 복사와 && 얕은 복사
