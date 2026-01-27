const tb = document.querySelectorAll(".tab-button");
const tc = document.querySelectorAll(".tab-content");

document.querySelector(".list").addEventListener("click", function (e) {
  
  const 숫자 = Number(e.target.dataset.id);

  // 전체 초기화
tb.forEach(function (e) {
  e.classList.remove("orange");
});
tc.forEach(function (e) {
  e.classList.remove("show");
});

  // 선택된 것만 활성화
  tb[숫자].classList.add("orange");
  tc[숫자].classList.add("show");
});


var car = '소나타';
var carPrice = 50000;
var carColor = 'white';

