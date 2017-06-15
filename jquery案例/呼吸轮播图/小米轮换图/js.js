$(function() {
	var num = 0 ;
	var speed = 500 ;
	var timer = null ;
	$('.con ul li').eq(0).show();
	//定时器 事件
	timer = setInterval(autoPlay,3000);
	function autoPlay(){
		$('.con ul li').stop().fadeOut(speed);
		num++;
		if( num > 4 ){
			num = 0 ;
		}
		$('.con ol li').eq(num).addClass('current').siblings().removeClass('current');
		$('.con ul li').eq(num).stop().fadeIn(speed).siblings().stop().fadeOut(speed);
	}
	//鼠标移入大盒子事件
	$('.con').hover(function() {
		$('a').show()
		clearInterval(timer);
		timer = null ;
	}, function() {
		$('a').hide();
		timer = setInterval(autoPlay,3000);
	});
	//右按钮事件
	$('.right').click(function(event) {
		autoPlay();
	});
	//左按钮事件
	$('.left').click(function(event) {
		$('.con ul li').stop().fadeOut(speed);
		num--;
		if( num < 0){
			num = 4 ;
		} 
		//alert(num);
		$('.con ol li').eq(num).addClass('current').siblings().removeClass('current');
		$('.con ul li').eq(num).stop().fadeIn(speed);
	});
	//下面ol事件
	$('.con ol li').click(function(event) {
		num = $(this).index();
		$('.con ol li').eq(num).addClass('current').siblings().removeClass('current');
		$('.con ul li').eq(num).stop().fadeIn(speed).siblings().stop().fadeOut(speed);
	});

});