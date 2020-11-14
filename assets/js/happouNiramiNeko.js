$(function() {
  var objWidth;
  var objHeight;
  var translatePropaty;

  var movePupil = $('.offset').on('mousemove', function(e) {
    objWidth = $(".bg").width()/100;
    objHeight = $(".bg").height()/100;
    console.log(e.offsetX/objWidth-100);
    translatePropaty = `translate(${e.offsetX / objWidth - 100}%,${e.offsetY / objWidth - 100}%) scaleY(3)`;
    $(".pupilWrapper").css("transform", translatePropaty);
  });

  $(".offset").hover(
    function () {
      movePupil;
    },
    function () {
      $(".pupilWrapper").css("transform", "translate(-50%, -50%) scaleY(3)");
    }
  );

}); 



