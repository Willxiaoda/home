$(document).ready(function(){
	//定义一个数组用于存放culture中图片的网址
	var culAddress = new Array("http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us","http://www.xingkong.us")
	// 先定义组织文化中图片的张数
	//先默认四张
	var culturePic = 4;
	//定义小圆点的个数
	var culsmaBut = Math.ceil(culturePic/3);
	//获取小圆点容器
	var culButton = $('#culbutton');
	//获取图片内容面板容器
	var culContent = $('#culture-content');
	//定义当前小圆点
	var culindex = 0;
	culContent.css('width',culturePic*280+'px');
	// 加载组织文化的图片
	for(var i = 0;i<culturePic;i++){
		culContent.append('<a><div class="cultureImg"></div></a>');
		$('.cultureImg').each(function(){
			$(this).css('background','url("image/culpic/cul-'+ (culturePic-i) +'.png")');
		});
	}


	//加载小圆点
	for(var m=0;m<culsmaBut;m++){
		culButton.append('<span></span');
	}

	var culSpan = $('#culbutton span');
	culSpan.eq(0).addClass('case-on');

	//小圆点点击事件
	culButton.on("click","span",function(){
		//假如点击点为当前点，函数不执行。
		if(culindex == $(this).index()){
			return;
		}
		culindex = $(this).index();
		$(this).addClass('case-on').siblings().removeClass('case-on');
		culContent.animate({
			left:-(culindex*840)+'px',
		});
	});

	//设置图片链接
	for(var n = 0;n<culAddress.length;n++){
		$("#culture-content a").eq(n).attr("href",culAddress[n]);
	}

});