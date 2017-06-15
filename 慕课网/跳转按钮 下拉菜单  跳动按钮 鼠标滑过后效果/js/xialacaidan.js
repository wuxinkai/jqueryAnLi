$(function(){
    $(document).ready(function(){/*等页面加载完成后要执行的内容*/
         $('.navF_ul li').mousemove(function(){
            $(this).find('.nulF_ul').slideDown(1000)
         })
        $('.navF_ul li').mouseleave(function(){
            $(this).find('.nulF_ul').slideUp()
        })
    })
})

//第五个下拉菜单的效果
$(function(){
    /*(过滤)一级菜单使用a标签点击的时候执行一个function*/
    $('#menulist').on("click","a",function(){
/*前半句可以得到我们点击的是第几个超级链接，后半句是通过前面的链接知道二级菜单的第几个通过mirgin显示出来*/
        var curIndex = $(this).index(),mlValu="-"+curIndex*100+"%";
        if($("#expandzone").hasClass("active")){
            $("#expandzone .expdiv").animate({marginLeft:mlValu});
        }else{
            $("#expandzone .expdiv").css({marginLeft:mlValu});
            $("#expandzone").animate({height:"130px"}).addClass("active")
        }

    })
})