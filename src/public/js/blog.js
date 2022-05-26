const showTOC = document.querySelector(
  '[rel-script="toggle-table-of-content"]'
);
console.log(showTOC);
const toc = document.getElementById("toc");
console.log(toc);
showTOC.addEventListener("click", (e) => {
  showTOC.innerHTML === "[Ẩn]"
    ? (showTOC.innerHTML = "[Hiện]")
    : (showTOC.innerHTML = "[Ẩn]");
  e.preventDefault();
  toc.classList.toggle("show");
});
