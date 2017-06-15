(function () {
    var nav = document.getElementById('nav');
    var list = nav.getElementsByTagName('li');

    for (var i = 0; i < list.length; i++) {

        ~function (i) {
            var cur = list[i];
            var span = cur.getElementsByTagName('span')[0];
            var layer = cur.getElementsByTagName('div')[0];
            var center = cur.getElementsByTagName('div')[1];
            var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;

        }(i)
    }
    /*滑动门*/
    var door = document.getElementById("door");//获取到最外面的盒子
    var doorUl = document.getElementById("door-ul");//最外面盒子里面的UL
    var list = door.getElementsByTagName("li");//UL里面浮动的li
    for (var i = 0; i < list.length; i++) {
        ~function (i) {
            var curLi = list[i];//获取一个li
            var A = curLi.getElementsByTagName("a")[1];//获取当前li里面的第二个a标签
            curLi.onmouseenter = function () {//当前的li滑过的时候
                console.log(i);

                //doorUl.style.left = -(i)*250+"px";
                //animate(this, {width: 1000}, 500);

                if (i == 4) {//处理最后一个li,外面的ul少走一些
                    console.log("ok");
                    animate(doorUl, {left: -(i - 1) * 250}, 500);
                } else {//除了最后一个li,都是让li外面的ul的left值等于i(从0开始的,所以滑过第一个的时候,外面的ul的left不改变)乘以(当前li里面第一个a标签的宽度)
                    animate(doorUl, {left: -(i) * 250}, 500);
                    console.log("sss");
                }
                animate(A, {width: 750}, 500);//让当前li里面的第二个a标签宽度外大

            }

            //当鼠标离开li的时候,都恢复
            curLi.onmouseleave = function () {
                //this.style.width = 250+"px";
                animate(doorUl, {left: 0}, 500);
                animate(A, {width: 0}, 500)
                //animate(this, {width: 250}, 500);
            }
        }(i)
    }

})();






/*关于搜索栏的*/
