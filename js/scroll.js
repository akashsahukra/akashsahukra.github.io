
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
  	var p1 = $( ".bg-1" ).last();
	var offset1 = p1.offset();
	var p2 = $( ".bg-2" ).last();
	var offset2 = p2.offset();
	var p3 = $( ".bg-3" ).last();
	var offset3 = p3.offset();
	var p4 = $( ".bg-4" ).last();
	var offset4 = p4.offset();

	  if (scroll >= offset2.top - 85 && scroll < offset3.top - 85) {
	    $(".navbar").css("background" , "#1261a0");
	  }
	  else if(scroll >= offset3.top - 85 && scroll < offset4.top - 85){
	  	$(".navbar").css("background", "#3895d3");
	  }
	  else if(scroll >= offset4.top - 85){
	  	$(".navbar").css("background", "#6699cc")
	  }
	  else{
		  $(".navbar").css("background" , "#072f5f");  	
	  }
  })
})