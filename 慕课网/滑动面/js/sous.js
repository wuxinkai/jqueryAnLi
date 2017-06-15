(function () {
    window.onload = function () {
        /**
         * 把jsonp操作封装起来，以供调用
         * @param wd {string} 要搜索的关键字
         * @param callback {Function} 回调函数
         */
        var request = function (wd, callback) {
            // https://gsp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=&wd=a&sc=hao123
            JSONPAdapter.request('https://gsp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
                {wd: wd, sc: 'hao123'},
                'cb', function (data) {
                    callback(data);
                });
        };

        var input = document.getElementById('search');
        var btn = document.getElementById('btn');
        var ul = document.querySelector('.drop-box ul');
        var box = document.querySelector('.drop-box');

        // 给input绑定键盘事件，执行搜索
        input.onkeyup = function () {
            var that = this;
            var content = that.value;
            if (content) {
                request(content, function (data) {
                    // 获取到内容之后，利用文档碎片，拼接到html中
                    var fragement = document.createDocumentFragment();
                    data['s'].forEach(function (item) {
                        var li = document.createElement('li');
                        li.innerHTML = item;
                        fragement.appendChild(li);
                    });
                    ul.innerHTML = '';
                    ul.appendChild(fragement);
                    // 显示下拉框
                    box.style.display = 'block';
                })
            }
        };


        // 利用冒泡，动态改变input的value值
        ul.onmouseover = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            input.value = target.innerHTML;
        };

        // 点击li 打开新页面搜索li的innerHTML
        // 利用冒泡
        ul.onclick = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(target.innerHTML), '_blank');
            // 为了防止点击ul让下拉框消失，所以阻止冒泡到body中
            e.cancelBubble = true;
            e.stopPropagation();
        };
        // 打开新页面并搜索
        btn.onclick = function () {
            var search = input.value;
            if (search) {
                window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(search), '_blank');
            }
        };
        // 点击出下拉框之外的任何地方都隐藏下拉框
        document.body.onclick = function (e) {
            box.style.display = 'none';
        }
    }



})()