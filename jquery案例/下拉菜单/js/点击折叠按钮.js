/*  方法 (1)   */
function show() {
//            hpn展开
    document.getElementById("hpn01").style.display = "block";
//          document.getElementById("pn").style.height='80px';
//            更换链接地址                           调用的收起2
    document.getElementById("strHref01").href = "javascript:hide();";
//            展开后更换文字
    document.getElementById("strHref01").innerHTML = "收起-";
}
//        收齐（2）
function hide() {
//            与上面相反
    document.getElementById("hpn01").style.display = "none";
//          document.getElementById("pn").style.height='60px';
    document.getElementById("strHref01").href = "javascript:show();";
    document.getElementById("strHref01").innerHTML = "更多选项+";
}