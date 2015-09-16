
$(document).ready(function (){
  $("#top").click(function (){
          $('html, body').animate({
              scrollTop: $("#skills").offset().top
          }, 2000);
  });
  $("#contactTop").click(function (){
          $('html, body').animate({
              scrollTop: $("#contact").offset().top
          }, 2000);
  });
})
