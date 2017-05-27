$(function(){
		$("#page").Page({
          totalPages: 20,//分页总数
          liNums:9,//分页的数字按钮数(建议取奇数)
          activeClass: 'activP', //active 类样式定义
          callBack : function(page){
          		//console.log(page)
          }
      });
		var a=0;
		function loop(){
			$("#pic1").children("img").eq(a).siblings("img").fadeOut();
			$("#pic1").children("img").eq(a).fadeIn(500);
			
			a++;
			if(a>1){a=0}
		}
	j=setInterval(loop,5000);
})