$(function () {
  // 加载header
  $('header').load("header.html", "", function (response, status, request) {
    $(this).html(response);
  });

  // pc-nav   mouseleave
  $('.header').on('mouseenter', '.nav li', function () {
    var _this = $(this);
    _this.find('.menu-down').stop().slideDown();
  });

  $('.header').on('mouseleave', '.nav li', function () {
    var _this = $(this);
    _this.find('.menu-down').stop().slideUp();
  });

  //加载footer
  $('footer').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
  });

  $(document).ready(function () {
    $("header").on("click", ".hamburger", function () {
      $(this).toggleClass("is-active");
      $('.nav-mobile,.flex-nav').toggleClass('active');
      if ($(this).hasClass('is-active')) {
        $('.btn-top').css('z-index', '1')
      } else {
        $('.btn-top').css('z-index', '2')
      }
    });

    $("header").on("click", ".show-menu", function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('.show-menu').text('+');
        $(this).text('-');
        $(this).parent().parent().parent().find('dd').stop().slideUp();
        $(this).parent().parent().find('dd').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('dd').stop().slideUp();
      }
    });

    $('.show-menu').click(function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('.show-menu').text('+');
        $(this).text('-');
        $(this).parent().parent().parent().find('dd').stop().slideUp();
        $(this).parent().parent().find('dd').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('dd').stop().slideUp();
      }
    })

    $("header").on("click", ".trd", function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('ul').stop().slideUp();
        $(this).parent().parent().parent().find('.trd').text('+');
        $(this).text('-');
        $(this).parent().parent().find('ul').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('ul').stop().slideUp();
      }
    });
  })
})

