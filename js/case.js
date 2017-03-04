$(document).ready(function(){
	//定义一个数组存放case案例中图片的网址
	var caseAddress = new Array("http://www.xingkong.us","http://www.lib.xingkong.us","http://www.market.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us");
	//此部分主要为星空案例下的js
	//先定义星空案例中要加载的图片的张数
	var casePic = 12;
	//定义星空案例下小圆点的个数
	var smallBut = Math.ceil(casePic/6);
	var caseIndex = 0;
	//获取案例面板容器
	var caseContent = $('#case-content');
	//获取小圆点容器
	var caseButton = $('#casebutton');
	//设定#case-content窗口的宽度
	caseContent.css("width",280*Math.ceil(casePic/2)+'px');
	//先加载第一页的图片
	for(var i = casePic;i > 0;i--){
		caseContent.append('<a><div class="caseImg"></div></a>');
		$('.caseImg').each(function(i){
			$(this).css('background','url("image/xkcase/case-'+ (casePic-i) +'.png")');
		});
	}
	//获得小圆点容器
	for(var m =0;m < smallBut;m++){
		caseButton.append('<span></span');
	}

	var caseSpan = $('#casebutton span');
	caseSpan.eq(0).addClass('case-on');

	//小圆点点击事件
	caseButton.on("click","span",function(){
		//假如点击点为当前点，函数不执行。
		if(caseIndex == $(this).index()){
			return;
		}
		caseIndex = $(this).index();
		$(this).addClass('case-on').siblings().removeClass('case-on');
		caseContent.animate({
			left:-(caseIndex*840)+'px',
		});
	});

	//设置图片的链接
	for(var n = 0;n<caseAddress.length;n++){
		$("#case-content a").eq(n).attr("href",caseAddress[n]);
	}

});

