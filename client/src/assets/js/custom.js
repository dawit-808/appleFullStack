import $ from "jquery";

// nav toggler
$(function () {
  $("#menu").on("click", function () {
    $(".navbar-collapse").slideToggle();
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".navbar").length) {
      $(".navbar-collapse").slideUp();
    }
  });
});

// Footer toggler
$(function () {
  $("footer h3").on("click", function () {
    if ($(window).width() < 768) {
      const $h3 = $(this);
      const $ul = $h3.next("ul");

      $h3.toggleClass("active");
      $("footer h3").not($h3).removeClass("active").next("ul").slideUp();

      $ul.slideToggle();
    }
  });

  if ($(window).width() < 768) {
    $("footer ul").hide();
  }

  $(window).on("resize", function () {
    if ($(window).width() >= 768) {
      $("footer ul").show();
      $("footer h3").removeClass("active");
    } else {
      $("footer ul").hide();
    }
  });
});
