// 1. 사용자가 입력한 소비자값을 찾아온다
// 2. 사용자가 입력한 할인율값을 찾아온다
// 3. 사용자가 할인가격 계산하기 버튼을 클릭하면 이벤트가 작동한다
// 4. 계산이벤트를 정의한다
// 5. 할인된 가격 출력 공간에 계산된 값을 출력한다

const btn = document.querySelector("#button");
const show = document.querySelector("#showResult");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const orignPrice = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  const savePrice = orignPrice * (rate / 100);
  const result = orignPrice - savePrice;

  show.innerHTML = `상품의 원래 가격은 ${orignPrice}이고. 할인률은 ${rate}% 입니다. ${savePrice}원을 절약헤 ${result}원에 구매할 수 있습니다`;
});
