$(document).ready(function() {
//漢堡
  $(function () {
      const navMenu = document.querySelector('.navbar');
      $('.menu').click(function(){
        $(this).toggleClass('active');
        navMenu.classList.toggle('active');
      })
	})
    
//頁籤
    $('#tag1').click(function() {
      $('.tag-list > div').removeClass('-active');
      $(this).addClass('-active');
      $('.tab-list > div').removeClass('-on');
      $('.tab-1').addClass('-on');
    });

    $('#tag2').click(function() {
      $('.tag-list > div').removeClass('-active');
      $(this).addClass('-active');
      $('.tab-list > div').removeClass('-on');
      $('.tab-2').addClass('-on');
    });

    $('#tag3').click(function() {
      $('.tag-list > div').removeClass('-active');
      $(this).addClass('-active');
      $('.tab-list > div').removeClass('-on');
      $('.tab-3').addClass('-on');
    });
    $(`.tag-list > div`).mouseenter(function(){
        $(this).addClass(`-active`).siblings().removeClass(`-active`);
    });

    $(`.tag-list`).mouseleave(function(){
        $(`.tag-list > div`).removeClass(`-active`);
        if ($('.tab-1').hasClass('-on')) {
            $('#tag1').addClass('-active');
        } else if ($('.tab-2').hasClass('-on')) {
            $('#tag2').addClass('-active');
        } else if ($('.tab-3').hasClass('-on')) {
            $('#tag3').addClass('-active');
        }
    });
    
// scroll 換天的背景色
  $(window).scroll(function(){
    if($(window).innerWidth() > 992){
      if (window.scrollY > $(window).height() * 0.3){
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }}
  });
  //查詢頁按鈕開關
  $('.resultCheck').hide()
  $('#resultCheck').click(function(){$('.resultCheck').show()})
});

