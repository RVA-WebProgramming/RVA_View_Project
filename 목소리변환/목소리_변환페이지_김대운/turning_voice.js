var sf = document.getElementById("start_free");
var cv = document.getElementById("check_voice");

sf.addEventListener("click", () => {
  sf.style.boxShadow = "none";
  setTimeout(() => {
    sf.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
  }, 80);
});

sf.addEventListener("click", () => {
  location.reload();
});

cv.addEventListener("click", () => {
  cv.style.boxShadow = "none";
  setTimeout(() => {
    cv.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
  }, 120);
});
