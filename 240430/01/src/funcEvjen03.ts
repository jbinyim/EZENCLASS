interface INameable {
  name: string;
}

// 타입가드
// 리액트를 사용할 떄 usestate를 활용해서 state의 초기값이 아직 정해지지 않은 상태에서 최초 랜더링 될 때 undefined 타입으로 결정될때가 분명 반드시 있을것이다
// 유니온 타입 = Union Type => 합집합
const getname = (o: INameable | undefined) => {
  return o !== undefined ? o.name : "unknown";
};

const n = getname(undefined);
console.log(n);
console.log(getname({ name: "jack" }));
