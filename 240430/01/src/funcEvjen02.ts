// 타입별칭 => 함수 타입 시그니처 대체 목적
type stringNumberFunc = (arg01: string, arg2: number) => void;

const f: stringNumberFunc = function (a, b) {};
const g: stringNumberFunc = (c, d) => {};
