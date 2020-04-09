 $(document).ready(function () {
     $(".menu li").hover(function(){
        $(this).find("ul:first").slideInDown(500)
     },function()
     {
        $(this).find("ul:first").slideOutDown(500)
     })
 });