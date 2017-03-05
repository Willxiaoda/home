$(document).ready(function(){
	//推文相关jq
	weixinus();
	//回到顶部函数
	backTop();

});
function weixinus(){
	//定义数组存放推文链接
	var arcLink = new Array("http://mp.weixin.qq.com/s/HQe4ocmVxlKDLH3Wt1Edtg","http://mp.weixin.qq.com/s/7BLsNrK3u-XxtSo0MWHD-g","http://mp.weixin.qq.com/s/9uHldKS1Ms3rPiz-G9lnuw","http://mp.weixin.qq.com/s/secF4V3loJFSlDiFRoeUdw","http://mp.weixin.qq.com/s/Nsxvqel4h2QfCi3HqrngeQ","http://mp.weixin.qq.com/s/Pld6J5qrpFIgJ3vMBYioFg");
	//定义数组存放推文标题
	var arcTitle = new Array("干货你造吗 | 要不要来一次穷游？","我不想越来越不喜欢过年","王者农药为什么这么毒","标签未落，标签又起","大宝 | 你别习惯，我不在","森弥｜是夜");
	//定义数组存放日期和作者
	var dateAndaut = new Array("01-22-2017 珊妹","01-25-2017 柒子","02-07-2017 -23","02-02-2017 啊眠","10-25-2016 大宝","11-01-2016 森弥");
	//定义推文的数量
	var arcNum = 6;
	// 动态加载推文的内容
	//定义一个定时器
	var weiTimer = null;
	for(var i = 0;i<arcNum;i++){
		$('#usword-content').append('<a><div class="arctical"></div></a>');
		$('#usword-content a').eq(i).attr('href',arcLink[i]);
		$('.arctical').eq(i).append('<div class="arcpic"></div><div class="arctitle"><h4></h4></div><div class="date"><p></p></div>');
		//设置图片背景
		$('.arcpic').eq(i).css('background','url("image/arctitle/arc-'+ (arcNum-i)+'.jpg")');
		//设置标题
		$('.arctitle h4').eq(i).text(arcTitle[i]);
		//设置日期和作者
		$('.date p').eq(i).text(dateAndaut[i]);
	}
	$('#down').toggle(function(){
		$('#usword').slideUp(1000);
		$('#down').removeClass('romate');

	},function(){
		$('#usword').slideDown();
		$('#down').addClass('romate');
		$(document).scrollTop($('#usword').offset().top);
		// var 
		var weiTimer = setInterval(function(){
			var bodyTop = document.documentElement.scrollTop || document.body.scrollTop;
			var weiSpeed = Math.ceil(bodyTop/300);
			// $(document).scrollTop(bodyTop + weiSpeed);
			document.documentElement.scrollTop = document.body.scrollTop = bodyTop + weiSpeed;
			if(bodyTop>=3680){
				clearInterval(weiTimer);
			}

		},35)
	});
}

// 侧边栏部件
function backTop(){
	var obtn = document.getElementById('btn');
	var tool = document.getElementById('tool');
	var clientHeight = document.documentElement.clientHeight;
	var nav_ifo = document.getElementById('nav_ifo');
	var sch_nav = document.getElementById('sch_nav');
	var timer = null;
	var isTop = true;
	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;if(osTop > 0.2*clientHeight){
			tool.style.display = "block";
		}
		else{
			tool.style.display = "none";
		}
	}
	obtn.onclick = function(){
		var timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var scrollSpeed = Math.ceil(osTop/4);
			isTop = true;
			document.documentElement.scrollTop = document.body.scrollTop = osTop - scrollSpeed;
			if(osTop == 0){
				clearInterval(timer);
			}
		},35);
	};
	sch_nav.onmousemove = function(){
		nav_ifo.style.display = "block";
	};
	nav_ifo.onmousemove = function(){
		this.style.display = "block";
	}
	nav_ifo.onmouseout = function(){
		this.style.display = "none";
	}
}
