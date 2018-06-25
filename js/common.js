$(document).ready(function() {
 
   $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
     
    $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

   $('input,textarea').focus(function(){
     $(this).data('placeholder',$(this).attr('placeholder'))
     $(this).attr('placeholder','');
   });
   $('input,textarea').blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
   });

   $(".sph").on('click', function(){
    if ($('.feed-p').text() == "+375 (44) 554 41 06") {
      $('#feed').toggle();
    } else if ($('#feed').css('display', 'none')) {
      $('.feed-p').text("+375 (44) 554 41 06");
      $('#feed').toggle();
    } else {
      $('.feed-p').text("+375 (44) 554 41 06");
    };
   });

   $(".sh").on('click', function(){
    if ($('.feed-p').text() == "+375 (17) 207 67 04") {
      $('#feed').toggle();
    } else if ($('#feed').css('display', 'none')) {
      $('.feed-p').text("+375 (17) 207 67 04");
      $('#feed').toggle();
    } else {
      $('.feed-p').text("+375 (17) 207 67 04");
    };
   });

   $(".sem").on('click', function(){
    if ($('.feed-p').text() == "info@trastaktiv.by") {
      $('#feed').toggle();
    } else if ($('#feed').css('display', 'none')) {
      $('.feed-p').text("info@trastaktiv.by");
      $('#feed').toggle();
    } else {
      $('.feed-p').text("info@trastaktiv.by");
    };
   });

   $(".ss").on('click', function(){
    if ($('.feed-p').text() == "trastaktiv") {
      $('#feed').toggle();
    } else if ($('#feed').css('display', 'none')) {
      $('.feed-p').text("trastaktiv");
      $('#feed').toggle();
    } else {
      $('.feed-p').text("trastaktiv");
    };
   });

   $(".sgeo").on('click', function(){
    if ($('.feed-p').text() == "г.Минск, ул.Гусовского, 2А,комната 5-5") {
      $('#feed').toggle();
    } else if ($('#feed').css('display', 'none')) {
      $('.feed-p').text("г.Минск, ул.Гусовского, 2А,комната 5-5");
      $('#feed').toggle();
    } else {
      $('.feed-p').text("г.Минск, ул.Гусовского, 2А,комната 5-5");
    };
   });

   $(".stime").on('click', function(){
    if ($('.feed-p').text() == "с  8:30 до 17:00") {
      $('#feed').toggle();
    } else if ($('#feed').css('display', 'none')) {
      $('.feed-p').text("с  8:30 до 17:00");
      $('#feed').toggle();
    } else {
      $('.feed-p').text("с  8:30 до 17:00");
    };
   });
   

   $('.feed-img').on('click', function(){
    $('#feed').hide();  
  });

   $('.btn').on('click', function(){
    $('.hidden-form-cont').css('display', 'flex');
   });

   $('.close-btn').on('click', function(){
    $('.hidden-form-cont').css('display', 'none');
   });
 });