$(document).ready(function() {
      const $container = $('.index-intro');
      const pics = ['.p1', '.p2', '.p3', '.p4', '.p5'];
      let currentIndex = 0;
      let intervalId = null;
      
      function startCarousel() {  //開始輪播
        intervalId = setInterval(function() {
          nextSlide();
        }, 5000);
      }
      
      function stopCarousel() {   //停止輪播
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }
      
      function nextSlide() {
        currentIndex = (currentIndex + 1) % pics.length;
        updateActiveState();
      }
      
      function updateActiveState() {
        $container.removeClass('active-p1 active-p2 active-p3 active-p4 active-p5');
        const activeClass = 'active-p' + (currentIndex + 1);
        $container.addClass(activeClass);
      }
      
      // 處理 hover 事件
      pics.forEach(function(pic, index) {
        $(pic).hover(
          function() {
            stopCarousel();
            currentIndex = index;
            updateActiveState();
          },
          function() {
            stopCarousel();
            startCarousel();
          }
        );
      });
      
      // 初始化
      startCarousel();
      updateActiveState();
    });