const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let url = "https://play.google.com/store/apps/details?id=live.hoova.android";
  let win = window.open(url, "_blank");

  if (win) {
    win.focus();
  }
});
