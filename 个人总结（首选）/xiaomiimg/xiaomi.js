$(function(){
	$('.con ul li').eq(0).show();//让第一张图片显示
	
	var timer = null;
	var myFn = function(e) {
        $('.con ul li').eq(num).stop().fadeOut(500);//这里控制的是目前能看到的这张图 让它fadeOut
		num++;
		if(num >4){//这里要加1之后 再去判断是否超出了范围
			num = 0;
		}
		$('.con ul li').eq(num).stop().fadeIn(500);
		$('.con ol li').eq(num).addClass('current').siblings().removeClass('current');//要在加1之后 再控制ol的li变化	
    }
	
	
	timer = setInterval(myFn,2000)//定时器开启
	
	
	$('.con').hover(function(e) {//鼠标移入和移除停止定时器
        $('.left,.right').show();
		clearInterval(timer)
		timer = null;
    },function(){
        $('.left,.right').hide();
		timer = setInterval(myFn,2000)	
	});	
	
	
	var num = 0;//全局变量 是轮换图的灵魂 所有的人都可以随时随地的修改或者获取这个值
	
	$('.right').click(myFn);//点击右按钮
	
	$('.left').click(function(e) {//点击右按钮
        $('.con ul li').eq(num).stop().fadeOut(500);//这里控制的是目前能看到的这张图 让它fadeOut
        num--;
		if(num < 0){
			num = 4;
		}
		$('.con ol li').eq(num).addClass('current').siblings().removeClass('current');//要在加1之后 再控制ol的li变化
		$('.con ul li').eq(num).stop().fadeIn(500);
    });
	$('.con ol li').click(function(e) {
			olKey = $(this).index();
           $('.con ul li').eq(olKey).stop().fadeIn(500);
		$('.con ol li').eq(olKey).addClass('current').siblings().removeClass('current');
        });
})