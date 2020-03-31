//メニュークリックでスムーズにスクロールする
$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

//メニューを上部に固定する
$(function() {
  var bar = $('.fixbar');
  var main = $('.main');
  //navの位置
  var navTop = bar.offset().top;
  //スクロールするたびに実行
  $(window).scroll(function () {
      var winTop = $(this).scrollTop();
      //スクロール位置がnavの位置より下だったらクラスfixedを追加
      if (winTop >= navTop) {
          bar.addClass('fixed');
          main.addClass('mainfixed')
      } else if (winTop <= navTop) {
          bar.removeClass('fixed');
          main.removeClass('mainfixed')
      }
  });
});

//現在位置のメニューの色を変える
$(function() {
  //各セクションの位置
  var sec = [$('#sec1').offset().top, $('#sec2').offset().top, $('#sec3').offset().top];
  var s = [$("nav ul li a.s0"), $("nav ul li a.s1"), $("nav ul li a.s2"), $("nav ul li a.s3")];

  //最初1回位置を確認
  var center = $(window).scrollTop() + $(window).height() / 2;
  check(center);

  //スクロールするたびに実行
  $(window).scroll(function () {
      center = $(window).scrollTop() + $(window).height() / 2;
      check(center);
  });

  //位置に合わせてcurrentクラスを追加する関数
  function check(center) {
    var i = 0;
    while(center > sec[i] && i <= 2){
      i++;
    }
    s[i].addClass('current');
    for(let j=0; j<4; j++){
      if(j!=i){
        s[j].removeClass('current');
      }
    }
  }

});
