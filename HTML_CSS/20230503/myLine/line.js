const path = document.querySelector("#helloLine");
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

  const drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength - drawLength;
}
window.addEventListener("scroll", scrollHandler);
