$(document).ready(function () {
  alert("Page is ready");
  $("img").click(() => {
    number = Math.floor(Math.random() * 6) + 1;
    $("img").delay(500).fadeIn();
    $("img").attr("src", `./img/${number}.png`);
  });
});
