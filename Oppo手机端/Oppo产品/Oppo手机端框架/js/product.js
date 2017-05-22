Zepto(function($){
	
//	$('#fullpage').fullpage({
// paddingTop:'1rem';
// anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'];
//  menu: '#myMenu'});
//	$('#fullpage').fullpage();


//第一部分:tab菜单部分
var scro=$(".header").height()+$("#banner").height();
//alert(scro);
      $(window).scroll(function(){
      	if($(window).scrollTop()>=scro){
      		$("#myMenu").css("position","fixed").css("top","0").css("z-index","999");
      	}
      	if($(window).scrollTop()<scro){
      		$("#myMenu").css("position","relative");
      		//alert(6666);
      	}
      });
//第二部分:R系列部分 
    var scroR=$(".header").height()+$("#banner").height()+$("#firstPage").height();
    $(window).scroll(function(){
      	if($(window).scrollTop()>=scroR){
      		$("#page5").addClass("active").siblings("li").removeClass("active").children('a').removeClass("active");
      		$("#page5").children('a').css("color","#00FF00");
      		$("#page5").siblings("li").children('a').css("color","#000");
          // $("#page5").removeClass("active");
      	}
      });
 //第三部分:A系列部分 
    var scroA=$(".header").height()+$("#banner").height()+$("#firstPage").height()+$("#secondPage").height();
      //  alert( scroA);
    $(window).scroll(function(){
      	if($(window).scrollTop()>=scroA){
      		$("#page2").addClass("active").siblings("li").removeClass("active").children('a').removeClass("active");
      		$("#page2").children('a').css("color","#00FF00");
      		$("#page2").siblings("li").children('a').css("color","#000");
          // $("#page5").removeClass("active");
      	}
      });
  //第四部分:Find系列部分 
    var scroFind=$(".header").height()+$("#banner").height()+$("#firstPage").height()+$("#secondPage").height()+$("#thirdPage").height();
   // alert( scroFind);
   // $(window).scrollTop(scroFind);
    $(window).scroll(function(){
      	if($(window).scrollTop()>=scroFind){
      		$("#page3").addClass("active").siblings("li").removeClass("active").children('a').removeClass("active");
      		$("#page3").children('a').css("color","#00FF00");
      		$("#page3").siblings("li").children('a').css("color","#000");
//    		$("#page2").css("color","#000000");
          // $("#page5").removeClass("active");
      	}
      }); 
 //第二部分:N系列部分 
    var scroN=$(".header").height()+$("#banner").height()+$("#firstPage").height()+$("#secondPage").height()+$("#thirdPage").height()+$("#fourthPage").height();
  // alert( scroN);
   $(window).scroll(function(){
      	if($(window).scrollTop()>=scroN){
      		$("#page4").addClass("active").siblings("li").removeClass("active").children('a').removeClass("active");
      		$("#page4").children('a').css("color","#00FF00");
      		$("#page4").siblings("li").children('a').css("color","#000");
          // $("#page5").removeClass("active");
      	}
      });
 
});
