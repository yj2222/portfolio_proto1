$(function() {
  var objWidth;
  var translatePropaty;
  var changeText = $('.offset').on('mousemove', function(e) {
    objWidth = $(this).width() / 100;
    $('.offset-x').text(e.offsetX);
    $('.offset-y').text(e.offsetY);
    translatePropaty = `translate(${e.offsetX / objWidth - 50}%,${e.offsetY / objWidth - 50}%)`;
    $("div.eye").css("transform", translatePropaty);
  });
  $(".offset").hover(
    function () {
      changeText;
    },
    function () {
      $('.offset-x').text("0");
      $('.offset-y').text("0");
      $("div.eye").css("transform", "translate(0)");
    }
  );
	
}); 



