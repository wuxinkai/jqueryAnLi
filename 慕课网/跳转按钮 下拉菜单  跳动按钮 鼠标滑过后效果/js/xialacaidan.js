$(function(){
    $(document).ready(function(){/*��ҳ�������ɺ�Ҫִ�е�����*/
         $('.navF_ul li').mousemove(function(){
            $(this).find('.nulF_ul').slideDown(1000)
         })
        $('.navF_ul li').mouseleave(function(){
            $(this).find('.nulF_ul').slideUp()
        })
    })
})

//����������˵���Ч��
$(function(){
    /*(����)һ���˵�ʹ��a��ǩ�����ʱ��ִ��һ��function*/
    $('#menulist').on("click","a",function(){
/*ǰ�����Եõ����ǵ�����ǵڼ����������ӣ�������ͨ��ǰ�������֪�������˵��ĵڼ���ͨ��mirgin��ʾ����*/
        var curIndex = $(this).index(),mlValu="-"+curIndex*100+"%";
        if($("#expandzone").hasClass("active")){
            $("#expandzone .expdiv").animate({marginLeft:mlValu});
        }else{
            $("#expandzone .expdiv").css({marginLeft:mlValu});
            $("#expandzone").animate({height:"130px"}).addClass("active")
        }

    })
})