$(function(){
  $('.roompic-list img').click(function(){
    let picSrc = $(this).attr('src');
    $(this).closest('.roompic').find('.roompic-top').attr('src', picSrc);
  });
});