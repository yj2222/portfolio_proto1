$(function() {
  var objWidth;
  var translatePropaty;
  var shadowPropaty;
  var changeText = $('.offset').on('mousemove', function(e) {
      objWidth = $(this).width() / 100;
      $('.offset-x').text((e.offsetX / $(this).width() * 100 - 50) / 10);
      $('.offset-y').text((e.offsetY / $(this).height() * 100 - 50) / 10);
      translatePropaty = `translate(${e.offsetX / objWidth - 50}%,${e.offsetY / objWidth - 50}%)`;
      $("div.eye").css("transform", translatePropaty);
      shadowPropaty = `${(e.offsetX / $(this).width() * 100 - 50) / 10}px ${(e.offsetY / $(this).height() * 100 - 50) / 10}px 30px 0px gray inset`;
      $("div.face").css("box-shadow", shadowPropaty);
  });
  $(".offset").hover(
    function () {
      changeText;
    },
    function () {
      $('.offset-x').text("0");
      $('.offset-y').text("0");
      $("div.eye").css("transform", "translate(0)");
      $("div.face").css("box-shadow", "0px 0px 30px 0px gray inset");
    }
  );
}); 



