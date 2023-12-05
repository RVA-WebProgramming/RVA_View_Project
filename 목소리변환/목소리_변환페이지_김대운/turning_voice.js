document.getElementById("start_free").addEventListener("click", () => {
  document.getElementById("start_free").style.boxShadow = "none";
  setTimeout(() => {
    document.getElementById("start_free").style.boxShadow =
      "0px 4px 4px rgba(0, 0, 0, 0.25)";
  }, 80);
});

document.getElementById("start_free").addEventListener("click", () => {
  location.reload();
});

document.getElementById("check_voice").addEventListener("click", () => {
  document.getElementById("check_voice").style.boxShadow = "none";
  setTimeout(() => {
    document.getElementById("check_voice").style.boxShadow =
      "0px 4px 4px rgba(0, 0, 0, 0.25)";
  }, 120);
});
