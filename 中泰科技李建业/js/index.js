// window.onload = function(){
			var config = {
				vx:1,
				vy:1,
				height: 3,
				width: 3,
				count: 100,
				color: "121, 162, 185",
				stroke: "199,199,199",
				dist: 6000,
				e_dist: 20000,
				max_conn: 10
			}
			CanvasParticle(config); 

		// }
	$(function(){
		$(".aa").mouseover(function(){
			$(this).css('transform',"rotate(360deg)");
		})
		$(".headers").children("li").children("a").click(function(){
			$(this).parent("li").siblings("li").children("a").css("font-size","13px");
			$(this).css("font-size","16px");
			$(this).parent("li").siblings().css("border-bottom","solid 0px #f00");
			$(this).parent("li").css("border-bottom","solid 2px rgba(255,0,0,1)");
		})
		$("#page").fullpage({
		menu:"#menu",
		anchors:["p1","p2","p3","p4","p5","p6","p7"],
		afterLoad:function(anchorLink,index){
			if(index==1){
				document.getElementsByTagName('canvas')[0].style.zIndex=1;
				$(".headers").children("li").eq('1').siblings().css("border-bottom","solid 0px #f00");
				$(".headers").children("li").eq('1').css("border-bottom","solid 2px rgba(255,0,0,1)");
			}
			if(index ==2){
				document.getElementsByTagName('canvas')[0].style.zIndex=-1;
				$(".headers").children("li").eq('2').siblings().css("border-bottom","solid 0px #f00");
				$(".headers").children("li").eq('2').css("border-bottom","solid 2px rgba(255,0,0,1)");
				// $("#sr").attr['src',''];
				$("script[src='js/bj.js']").remove();
				$(".s2-text1").animate({"opacity":"1"},100);
				$(".s2-text1").animate({"top":"130px"},2000);
				$(".s2-text2").animate({"opacity":"1"},500);
				$(".s2-text2").animate({"top":"260px"},1000);
				$(".radu1").animate({"opacity":"1"},500);
				$(".radu1").animate({"left":"10px"},1000);
				$(".radu2").animate({"opacity":"1"},500);
				$(".radu2").animate({"left":"275px"},1000);
				$(".radu3").animate({"opacity":"1"},500);
				$(".radu3").animate({"left":"550px"},1000);
				$(".radu4").animate({"opacity":"1"},500);
				$(".radu4").animate({"left":"825px"},1000);
				}
			if(index ==3){
				document.getElementsByTagName('canvas')[0].style.zIndex=-1;
				$(".headers").children("li").eq('3').siblings().css("border-bottom","solid 0px #f00");
				$(".headers").children("li").eq('3').css("border-bottom","solid 2px rgba(255,0,0,1)");
				$(".s3-text1").animate({"opacity":"1"},100);
				$(".s3-text1").animate({"top":"130px"},2000);
				$(".pics1").animate({"opacity":"1"},500);
				$(".pics1").animate({"left":"20px"},1000);
				$(".pics2").animate({"opacity":"1"},500);
				$(".pics2").animate({"left":"250px"},1000);
				$(".pics3").animate({"opacity":"1"},500);
				$(".pics3").animate({"left":"490px"},1000);
				$(".pics4").animate({"opacity":"1"},500);
				$(".pics4").animate({"left":"730px"},1000);
			}
			if(index ==4){
				document.getElementsByTagName('canvas')[0].style.zIndex=-1;
				$(".headers").children("li").eq('4').siblings().css("border-bottom","solid 0px #f00");
				$(".headers").children("li").eq('4').css("border-bottom","solid 2px rgba(255,0,0,1)");
				$(".s4-pic1").animate({"opacity":"1"},100);
				$(".s4-pic1").animate({"top":"120px"},2000);
				$(".s4-pic2").animate({"opacity":"1"},100);
				$(".s4-pic2").animate({"top":"350px"},2000);
				$(".s4-line").animate({"opacity":"1"},2000);
				$(".s4-text1").animate({"opacity":"1"},100);
				$(".s4-text1").animate({"left":"580px"},2000);
			}
			if(index ==5){
				document.getElementsByTagName('canvas')[0].style.zIndex=-1;
				$(".headers").children("li").eq('5').siblings().css("border-bottom","solid 0px #f00");
				$(".headers").children("li").eq('5').css("border-bottom","solid 2px rgba(255,0,0,1)");
				$(".s5-text1").animate({"opacity":"1"},100);
				$(".s5-text1").animate({"top":"130px"},2000);
				$(".s5-text2").animate({"opacity":"1"},100);
				$(".s5-text2").animate({"left":"250px"},1000);
				$(".s5-pic").animate({"opacity":"1"},100);
				$(".s5-pic").animate({"left":"250px"},1000);
			}
			if(index ==6){
				document.getElementsByTagName('canvas')[0].style.zIndex=-1;
				$(".headers").children("li").eq('6').siblings().css("border-bottom","solid 0px #f00");
				$(".headers").children("li").eq('6').css("border-bottom","solid 2px rgba(255,0,0,1)");
				$(".s6-text1").animate({"opacity":"1"},100);
				$(".s6-text1").animate({"top":"130px"},2000);
				$(".s6-text3").animate({"opacity":"1"},100);
				$(".s6-text3").animate({"top":"280px"},1000);
				$(".join").animate({"opacity":"1"},100);
				$(".join").animate({"top":"480px"},1000);
			}
			if(index==7){
				document.getElementsByTagName('canvas')[0].style.zIndex=-1;
				$(".headers").children("li").eq('7').siblings().css("border-bottom","solid 0px #f00");
				$(".headers").children("li").eq('7').css("border-bottom","solid 2px rgba(255,0,0,1)");
				$(".s7-text1").animate({"opacity":"1"},100);
				$(".s7-text1").animate({"top":"60px"},2000);
			}
		},
		onLeave:function(index,direction){
			    if(index ==2){
				$(".s2-text1").animate({"opacity":"0"},500);
				$(".s2-text1").animate({"top":"0px"},1000);
				$(".s2-text2").animate({"opacity":"0"},100);
				$(".s2-text2").animate({"top":"310px"},1000);
				$(".radu1").animate({"opacity":"0"},500);
				$(".radu1").animate({"left":"30px"},1000);
				$(".radu2").animate({"opacity":"0"},500);
				$(".radu2").animate({"left":"305px"},1000);
				$(".radu3").animate({"opacity":"0"},500);
				$(".radu3").animate({"left":"580px"},1000);
				$(".radu4").animate({"opacity":"0"},500);
				$(".radu4").animate({"left":"855px"},1000);
				}
				if(index ==3){
				$(".s3-text1").animate({"opacity":"0"},100);
				$(".s3-text1").animate({"top":"00px"},2000);
				$(".pics1").animate({"opacity":"0"},500);
				$(".pics1").animate({"left":"0px"},1000);
				$(".pics2").animate({"opacity":"0"},500);
				$(".pics2").animate({"left":"220px"},1000);
				$(".pics3").animate({"opacity":"0"},500);
				$(".pics3").animate({"left":"470px"},1000);
				$(".pics4").animate({"opacity":"0"},500);
				$(".pics4").animate({"left":"710px"},1000);
			}
			if(index ==4){
				$(".s4-pic1").animate({"opacity":"0"},2000);
				$(".s4-pic1").animate({"top":"0px"},2000);
				$(".s4-pic2").animate({"opacity":"0"},2000);
				$(".s4-pic2").animate({"top":"470px"},2000);
				$(".s4-line").animate({"opacity":"0"},1000);
				$(".s4-text1").animate({"opacity":"0"},100);
				$(".s4-text1").animate({"left":"700px"},2000);

			}
			if(index ==5){
				document.getElementsByTagName('canvas')[0].style.zIndex=-1;
				$(".s5-text1").animate({"opacity":"0"},100);
				$(".s5-text1").animate({"top":"0px"},2000);
				$(".s5-text2").animate({"opacity":"0"},100);
				$(".s5-text2").animate({"left":"550px"},1000);				
				$(".s5-pic").animate({"left":"0px"},1000);
				$(".s5-pic").animate({"opacity":"0"},1000);
			}
			if(index ==6){

				$(".s6-text1").animate({"opacity":"0"},100);
				$(".s6-text1").animate({"top":"0px"},2000);
				$(".s6-text3").animate({"top":"480px"},1000);
				$(".s6-text3").animate({"opacity":"0"},100);				
				$(".join").animate({"top":"680px"},1000);
				$(".join").animate({"opacity":"0"},100);
				
			}
			if(index==7){
				document.getElementsByTagName('canvas')[0].style.zIndex=-1;
				
				$(".s7-text1").animate({"top":"0px"},2000);
				$(".s7-text1").animate({"opacity":"0"},100);
			}
		}
		

	});
})