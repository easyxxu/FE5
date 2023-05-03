const popup = document.querySelector(".popup");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const dim = document.querySelector(".dim");

// 첫번째 포커스 요소
const firstEl = popup.querySelector("a");
const firstEl2 = popup.querySelectorAll("a");

function openPopup() {
  popup.classList.add("active");
  firstEl.focus();
}
function closePopup() {
  popup.classList.remove("active");
}

btnOpen.addEventListener("click", openPopup);
btnClose.addEventListener("click", closePopup);
btnClose.addEventListener("keydown", function (e) {
  // console.log(e.key); //내가 누르고 있는 키 정보를 알려줌
  // tab만 누를때
  if (!e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    firstEl.focus();
  }
});
firstEl.addEventListener("keydown", function (e) {
  // shift + tab 을 누를때
  if (e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    btnClose.focus();
  }
});
//뒷배경을 눌러도 팝업이 꺼지게
dim.addEventListener("click", closePopup);
