document.getElementById("logo").addEventListener("click", function () {
  history.back();
});
document.getElementById("start-free").addEventListener("click", function () {
  this.classList.add("clicked");
  setTimeout(() => {
    this.classList.remove("clicked");
  }, 100);
});
