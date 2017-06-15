


var time = 300;
var h = 40;
//展开
function showdiv(obj) {
    //自己  父亲（p）下一个同级节点（div）
    //obj.parentNode.nextSibling.style.display = "block";
//     自己  父亲（p）下一个同级节点（div）
var x = obj.parentNode.nextSibling;
    //包含众多空格作为文本节点，因此在我们使用nextSibling和previousSibling时就会出现问题。
    //因为FireFox会把文本节点误当做元素节点的兄弟节点来处理。我们可以添加nodeType来判断。
    //当上一节点或者是下一节点为文本节点时，就继续寻找，直到找到下一个元素节点。
    //  其中nodeType的值主要有以下几种：
    //
    // 元素节点的nodeType值为1
    // 属性节点的nodeType值为2
    // 文本节点的nodeType值为3
//判断兼容性
    if (x.nodeType != 1) {
        x = x.nextSibling;
    }
//全文div显示
    x.style.display = "block";
//自己的 父亲隐藏
    obj.parentNode.style.display = "none";

}


//折叠
function hidediv(obj) {
//  自己的 父元素(p), 的父元素(div)  隐藏（全文部分）
    obj.parentNode.parentNode.style.display = "none";
//     让自己的  前一个同胞节点 显示出来
    var x = obj.parentNode.parentNode.previousSibling;
//浏览器兼容
    if (x.nodeType != 1) {
        x = x.previousSibling;
    }
    x.style.display = "block";
}