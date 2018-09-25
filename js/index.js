$(document).ready(() => {
  $(".music").hover(() => {
    $("body").css("background", "#DB3340");
    $(".music").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
    $(".description").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".music").css("color", "#DB3340");
    $("h1").css("color", "#28ABE3");
    $(".description").css("color", "#000000");
  });

  $(".fashion").hover(() => {
    $("body").css("background", "#E8B71A");
    $(".fashion").css("color", "#fff");
    $("h1").css("color", "#ffffff");
    $(".description").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".fashion").css("color", "#E8B71A");
    $("h1").css("color", "#28ABE3");
    $(".description").css("color", "#000000");
  });

  $(".coding").hover(() => {
    $("body").css("background", "#1FDA9A");
    $(".coding").css("color", "#fff");
    $("h1").css("color", "#ffffff");
    $(".description").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".coding").css("color", "#1FDA9A");
    $("h1").css("color", "#28ABE3");
    $(".description").css("color", "#000000");
  });
});
