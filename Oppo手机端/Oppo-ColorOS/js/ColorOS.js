$(function(){
	$("#headers").children("li").click(function(){
//		var aa=$(this).index();
		$(this).siblings("li").css("border-bottom","0.05rem solid #35bb7e");
		$(this).css("border-bottom","0.05rem solid #ff0");
		
	})
	
})
