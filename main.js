$(document).ready(function () {
  $(".CloseIconWrapper").click(function (e) {
    $(".Modal").fadeOut();
    $("body").removeClass("BodyModalShown");
    e.preventDefault();
    e.stopPropagation();
  });
  $(".CourseSummaryItem").click(function (e) {
    if ($(".Modal", this).is(":hidden")) {
      $(".Modal", this).css("display", "flex").hide().fadeIn();
      $("body").addClass("BodyModalShown");
      e.preventDefault();
    }
  });
  $(".FaqItem").click(function (e) {
    if ($(".Modal", this).is(":hidden")) {
      $(".Modal", this).css("display", "flex").hide().fadeIn();
      $("body").addClass("BodyModalShown");
      e.preventDefault();
    }
  });
});
