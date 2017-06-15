;(function(){
    /*打字效果*/
    function fnAnText() {
        var anText = document.getElementById('anText');
        var str = anText.innerHTML; //p 标签里的文字
            anText.innerHTML = "";  //先清空里面内容
            anText.style.opacity = 1;
            str = str.split(""); //把这段话拆封，用字符串隔开，获取他的总长度
            var num = 0;
            var inner;
            var timer = window.setInterval(function () {
                anText.innerHTML += str[num]; //把数数字的每一个字，每个100毫秒添加到 html中
                num++;  //存储再添加

                if (num == str.length) { //当nun的长度等于字符串的长度时就清楚定时器
                    window.clearInterval(timer);
                }
            }, 100)
    }
    window.onload =function(){  //页面加载完成后执行
        fnAnText()
    }

})();
