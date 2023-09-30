<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/fluid.png");
         document.title = 'Bye.';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/fluid.png");
         document.title = 'Hi.';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 10000000000);
     }
 });