//funtion animation Backgroud
var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 15s
      setTimeout(showSlides, 15000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0)
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n)
   }

//TOP menu
var header = document.querySelector('#menu');
	var origOffsetY = header.offsetTop;
  origOffsetY = 680;
  console.log(origOffsetY)
	function onScroll(e) {
		window.scrollY >= origOffsetY ? header.classList.add('sticky') :
	                                  header.classList.remove('sticky');
	}

	document.addEventListener('scroll', onScroll);