;(function(){
    /*����Ч��*/
    function fnAnText() {
        var anText = document.getElementById('anText');
        var str = anText.innerHTML; //p ��ǩ�������
            anText.innerHTML = "";  //�������������
            anText.style.opacity = 1;
            str = str.split(""); //����λ���⣬���ַ�����������ȡ�����ܳ���
            var num = 0;
            var inner;
            var timer = window.setInterval(function () {
                anText.innerHTML += str[num]; //�������ֵ�ÿһ���֣�ÿ��100������ӵ� html��
                num++;  //�洢�����

                if (num == str.length) { //��nun�ĳ��ȵ����ַ����ĳ���ʱ�������ʱ��
                    window.clearInterval(timer);
                }
            }, 100)
    }
    window.onload =function(){  //ҳ�������ɺ�ִ��
        fnAnText()
    }

})();
