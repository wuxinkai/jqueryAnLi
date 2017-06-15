
//（第一步）
window.onload=function(){
//  获取黑色图层
    var omask = document.getElementById('mask');

    //获取父元素div
    var osearchTip = document.getElementById('searchTip');
    // 获取所有子元素div抓出来
    var asetp = osearchTip.getElementsByTagName('div');
    //获取所有的子元素里面的 a标签
    var aA = osearchTip.getElementsByTagName('a');
    //获取所有的关闭按钮
    var aClose = osearchTip.getElementsByTagName('span');

//  （第五步二阶段）  读取cookie  获取的是第60行  www.我的网址.com 内容
    var res = document.cookie.substring(5);
    alert('三十天只能不会弹出提示框');


//判断是否来过这个网站如果来过就不显示提示信息
    //当页面不等于   "www.bbb.com.cn  执行以下代码
    if (res != "www.bbb.com.cn") {
// （第二部）黑色遮罩显示       父盒子                  第一个 子元素            显示
        omask.style.display = osearchTip.style.display = asetp[0].style.display = 'block';

//(第三部)做循环   步长
        for (var i = 0; i < asetp.length; i++) {
            aA[i].index = i; //为每一个按钮增加一个index属性， a标签本没有这个属性， 为后面索引用
            aA[i].onclick = function () {
                //让被点击的a标签的父亲，隐藏
                this.parentNode.style.display = "none";

                //     asetp.length是所有按钮的个数减去1，就是最后一个按钮      this.index是当前按钮            解释：当前按钮不是最后一个按钮，就执行以下代码            if是为了解决报错
                if (this.index < asetp.length - 1) {
                    // 当前的步长+ 1 显示出来
                    asetp[this.index + 1].style.display = "block"
                }
                //else 代表如果上面代码不执行，就执行else下面的代码
                else if (this.index == asetp.length - 1) {
                    //遮罩   和   父元素 都隐藏
                    omask.style.display = osearchTip.style.display = "none"

                }
            }
        }

// （第四步）   关闭按钮
        for (var i = 0; i < aClose.length; i++) {
            aClose[i].onclick = function () {
                omask.style.display = osearchTip.style.display = "none";
            }
        }

//（第五步1阶段）  设置是否是第一次登陆，用cookie设置   添加

        //获取当前日期
        var oDate = new Date();

        // oDate.setDate当前日期  括号里写的是加30天之后             解释：让oData的日期等于30天之后的日期
        oDate.setDate(oDate.getDate() + 30);

        //               名字（自己起）  网站地址        失效时间(30天)
        document.cookie = "name=www.bbb.com.cn;expires=" + oDate;

    }
};