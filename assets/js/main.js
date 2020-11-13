$(function(){
  // headerのmenu barのアニメーション
  $(".headerMenu__bars").click(function(){
    if($(this).children("p").eq(1).hasClass("headerMenu__bars__child1")){ 
      for(var i = 0; i < 3; i++){
        $(this).children("p").eq(i).removeClass("headerMenu__bars__child" + i);
      }
      $(".headerMenu__sm > ul > li").removeClass("opened");
    } else {
      for(var i = 0; i < 3; i++){
        $(this).children("p").eq(i).addClass("headerMenu__bars__child" + i);
      }
      $(".headerMenu__sm > ul > li").addClass("opened");
    }
  })
  // smサイズ、ドロップダウンメニュー
  $(".headerMenu__sm > ul > li > a").click(function(e){
    console.log("OK")
    e.preventDefault();
    $targetList = $(this).next(".dropDown").children("li")
    if($targetList.hasClass("opened")){
      $(this).parent().removeClass("openedDropDown");
      $targetList.removeClass("opened");
    } else {
      $(this).parent().addClass("openedDropDown");
      $targetList.addClass("opened");
    }
  })
})