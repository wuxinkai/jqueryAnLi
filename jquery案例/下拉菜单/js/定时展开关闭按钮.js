//展开样式
var time = 300;
var h = 0;
function addCount() {
// (1)时间
//如果时间大于0， 时间不断减少   高度不断增加
    if (time > 0) {
        time--;
        h = h + 5;
    }
    else {
//时间小于0直接退出
        return;
    }
// （2）高度
//高度大于300直接退出
    if (h >= 300)  //高度
    {
        return;
    }
    else {
//如果高度不到300就  加到300px
        document.getElementById("pn2").style.height = h + "px";
    }
//（3）做循环
//调用  上面的addCount()  每个30毫秒增加5px
    setTimeout("addCount()", 30);
}
//在页面加载后的时候执行
window.onload = function showAds() {
    addCount();
//展开后停留5秒， 执行noneAds()函数   （也就是关闭样式）
    setTimeout("noneAds()", 5000);
}



//收起样式
var T = 300;
var N = 300; //高度
//27行执行的函数如下
function noneAds() {
//时间判断
    if (T > 0) {
        T--;
        N = N - 5;
    }
    else {
        return;
    }
//    高度判断
//高度小于等于0 就让 内容隐藏，
    if (N <= 0) {
        //隐藏广告层
        document.getElementById("pn2").style.display = "none";
        //document.getElementById("pn2").style.height = "30px";
        //大于300px就直接退出return
        return;
    }
    else {
//如果高度不够300px，就让他加到300px
        document.getElementById("pn2").style.height = N + "px";
    }
    //30毫秒执行一次 不断的进行
    setTimeout("noneAds()", 30);
}