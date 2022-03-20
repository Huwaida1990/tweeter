$(document).ready(function () {
  $("#tweet-text").on("input", () => {
    $(".counter").val(140 - $("#tweet-text").val().length);
    $(".counter").val() < 0
      ? $(".counter").css("color", "red")
      : $(".counter").css("color", "#545149");
  });
});
